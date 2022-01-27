var game = new Chess()
var prompt = prompt("white or black *racially motivated*");

function onDragStart (source, piece, position, orientation) {
	// do not pick up pieces if the game is over
    if (game.game_over()) return false

    // only pick up pieces for the side to move
    if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
        (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
      return false
    }
}

function onDrop (source, target) {
    // see if the move is legal
    var move = game.move({
      from: source,
      to: target,
      promotion: 'q' // NOTE: always promote to a queen for example simplicity
    })

    if (game.turn() === "w" && prompt == "white"){
        const calc = dkeress(game, -Infinity, Infinity, true, "w")[0];
        game.move({
            from: calc.from,
            to: calc.to,
            promotion: 'q'
        });
    }

    if (game.turn() === "b" && prompt == "black"){
    	const calc = dkeress(game, -Infinity, Infinity, true, "b")[0];
    	game.move({
    		from: calc.from,
    		to: calc.to,
    		promotion: 'q'
    	});
    }

    // illegal move
    if (move === null) return 'snapback'
}

// update the board position after the piece snap
// for castling, en passant, pawn promotion
function onSnapEnd () {
	board.position(game.fen())
}

var config = {
    draggable: true,
    position: 'start',
    onDragStart: onDragStart,
    onDrop: onDrop,
    onSnapEnd: onSnapEnd
}

var board = Chessboard("myBoard", config);