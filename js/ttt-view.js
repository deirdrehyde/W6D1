class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", (e) => {
      const $innersquare = $(e.currentTarget);
      this.makeMove($innersquare);
    });
  }

  isOver() {
    if (this.game.isOver()) {
      return true;
    }
    return false;
  }

  makeMove($square) {
    if (!this.isOver()) {
      let mark = this.game.currentPlayer;

      $square.css("background-color", "blue");
      $square.addClass(mark);
      $square.text(mark);

      let pos = $square.data("pos").split(",");
      this.game.playMove(pos);

      if (this.isOver()) {
        let $body = $('body');
        const $youWon = $('<h1 class="won">').html('You won!');
        $body.append($youWon);
        console.log($('li'));
        // $('li').hasClass(mark).css("background-color","green");
      }
    }
  }

  setupBoard() {
    for (let i = 0; i < 3; i++) {
      this.addRow();
    }
  }

  addRow() {
    const rowIdx = this.$el.find(".row").length;
    const $row = $("<ul>").addClass("row").addClass("group");
    for (let colIdx = 0; colIdx < 3; colIdx++) {
      const $square = $("<li>").addClass("square").attr("data-pos", [rowIdx, colIdx]);

      // $square.on("mouseover", (e) => {
      //   const $innersquare = $(e.currentTarget);
      //   if ($innersquare.css("background-color") === "green") {
      //     console.log($innersquare.css("background-color"));
      //   } else {
      //     $innersquare.css("background-color", "yellow");
      //     console.log($innersquare.css("background-color"));
      //   }
      // });
      $row.append($square);
    }
    this.$el.append($row);
  }
}

module.exports = View;
