const weights = {
    p: 100,
    n: 280,
    b: 320,
    r: 479,
    q: 929,
    k: 60000,
    k_e: 60000
};

const pst_w = {
    p: [
            [ 100, 100, 100, 100, 105, 100, 100,  100],
            [  78,  83,  86,  73, 102,  82,  85,  90],
            [   7,  29,  21,  44,  40,  31,  44,   7],
            [ -17,  16,  -2,  15,  14,   0,  15, -13],
            [ -26,   3,  10,   9,   6,   1,   0, -23],
            [ -22,   9,   5, -11, -10,  -2,   3, -19],
            [ -31,   8,  -7, -37, -36, -14,   3, -31],
            [   0,   0,   0,   0,   0,   0,   0,   0]
        ],
    n: [ 
            [-66, -53, -75, -75, -10, -55, -58, -70],
            [ -3,  -6, 100, -36,   4,  62,  -4, -14],
            [ 10,  67,   1,  74,  73,  27,  62,  -2],
            [ 24,  24,  45,  37,  33,  41,  25,  17],
            [ -1,   5,  31,  21,  22,  35,   2,   0],
            [-18,  10,  13,  22,  18,  15,  11, -14],
            [-23, -15,   2,   0,   2,   0, -23, -20],
            [-74, -23, -26, -24, -19, -35, -22, -69]
        ],
    b: [ 
            [-59, -78, -82, -76, -23,-107, -37, -50],
            [-11,  20,  35, -42, -39,  31,   2, -22],
            [ -9,  39, -32,  41,  52, -10,  28, -14],
            [ 25,  17,  20,  34,  26,  25,  15,  10],
            [ 13,  10,  17,  23,  17,  16,   0,   7],
            [ 14,  25,  24,  15,   8,  25,  20,  15],
            [ 19,  20,  11,   6,   7,   6,  20,  16],
            [ -7,   2, -15, -12, -14, -15, -10, -10]
        ],
    r: [  
            [ 35,  29,  33,   4,  37,  33,  56,  50],
            [ 55,  29,  56,  67,  55,  62,  34,  60],
            [ 19,  35,  28,  33,  45,  27,  25,  15],
            [  0,   5,  16,  13,  18,  -4,  -9,  -6],
            [-28, -35, -16, -21, -13, -29, -46, -30],
            [-42, -28, -42, -25, -25, -35, -26, -46],
            [-53, -38, -31, -26, -29, -43, -44, -53],
            [-30, -24, -18,   5,  -2, -18, -31, -32]
        ],
    q: [   
            [  6,   1,  -8,-104,  69,  24,  88,  26],
            [ 14,  32,  60, -10,  20,  76,  57,  24],
            [ -2,  43,  32,  60,  72,  63,  43,   2],
            [  1, -16,  22,  17,  25,  20, -13,  -6],
            [-14, -15,  -2,  -5,  -1, -10, -20, -22],
            [-30,  -6, -13, -11, -16, -11, -16, -27],
            [-36, -18,   0, -19, -15, -15, -21, -38],
            [-39, -30, -31, -13, -31, -36, -34, -42]
        ],
    k: [  
            [  4,  54,  47, -99, -99,  60,  83, -62],
            [-32,  10,  55,  56,  56,  55,  10,   3],
            [-62,  12, -57,  44, -67,  28,  37, -31],
            [-55,  50,  11,  -4, -19,  13,   0, -49],
            [-55, -43, -52, -28, -51, -47,  -8, -50],
            [-47, -42, -43, -79, -64, -32, -29, -32],
            [ -4,   3, -14, -50, -57, -18,  13,   4],
            [ 17,  30,  -3, -14,   6,  -1,  40,  18]
        ],

    // Endgame King Table
    k_e: [
            [-50, -40, -30, -20, -20, -30, -40, -50],
            [-30, -20, -10,   0,   0, -10, -20, -30],
            [-30, -10,  20,  30,  30,  20, -10, -30],
            [-30, -10,  30,  40,  40,  30, -10, -30],
            [-30, -10,  30,  40,  40,  30, -10, -30],
            [-30, -10,  20,  30,  30,  20, -10, -30],
            [-30, -30,   0,   0,   0,   0, -30, -30],
            [-50, -30, -30, -30, -30, -30, -30, -50]
        ]
};

const pst_b = {
    p: [...pst_w.p].reverse(),
    n: [...pst_w.n].reverse(),
    b: [...pst_w.b].reverse(),
    r: [...pst_w.r].reverse(),
    q: [...pst_w.q].reverse(),
    k: [...pst_w.k].reverse(),
    k_e: [...pst_w.k_e].reverse()
};

const opponent = {
    w: pst_b,
    b: pst_w
};
const self = {
    w: pst_w,
    b: pst_b
};

//initialize tranpsposition table for zobrist hashing
const transpositionTable = [];
var zobristHistory = {};
for (var i = 0; i < 8; i++){
    const column = [];
    for (var j = 0; j < 8; j++){
        column.push({
            K: Math.floor(Math.random() * 10000000000),
            Q: Math.floor(Math.random() * 10000000000),
            R: Math.floor(Math.random() * 10000000000),
            B: Math.floor(Math.random() * 10000000000),
            N: Math.floor(Math.random() * 10000000000),
            P: Math.floor(Math.random() * 10000000000),
            k: Math.floor(Math.random() * 10000000000),
            q: Math.floor(Math.random() * 10000000000),
            r: Math.floor(Math.random() * 10000000000),
            b: Math.floor(Math.random() * 10000000000),
            n: Math.floor(Math.random() * 10000000000),
            p: Math.floor(Math.random() * 10000000000)
        });
    }
    transpositionTable.push(column);
}

/*
Minimax:

Iterates through all possible moves, sorted by random to avoid ties

Checks for each one of those moves through the evaluation function led by premade PSTs.
This returns a sum of the game, which is then compared through each iteration.

If the sum of the previous piece is bigger than the new sum, ignore it.
If the sum of the previous piece is smaller than the new sum, replace sum and best move that comes along in the returned array.
This is on depth of 1.

With depths exceeding 1 recurssion occurs.
The function runs again and anticipates future moves by calculating on the move moved, returning the sum a few moves foward (based on depth)

All of the above happens with each iteration of all possible moves

All possible moves are calculated through the handy method game.ugly_moves();

*/

var maxDepth = 5;
var initialDepth = 0;
var positionsEvaluated = 0;
var globalSum = 0;
var bestMove;
function dkeress(game, alpha, beta, isMaximizingPlayer, color){
    zobristHistory = {};
    var then = performance.now();
    for (var i = 0; i < maxDepth && (performance.now() - then) < 3000; i++){
        initialDepth++;
        bestMove = minimax(game, initialDepth, alpha, beta, isMaximizingPlayer, globalSum, color);
    }
    console.log(`Evaluated ${positionsEvaluated} positions`);
    console.log(`At a depth of ${initialDepth}`);
    console.log(`The eval is ${globalSum}`);
    positionsEvaluated = 0;
    initialDepth = 1;
    return bestMove;
}

function calculateZobrist(boardCache){
    const zobristPieces = [];
    var zobristKey = 0;
    for (var i = 0; i < boardCache.length; i++){
        for (var j = 0; j < boardCache[i].length; j++){
            const piece = boardCache[i][j];
            if (piece){
                //making piece type capitalization match to transposition table
                piece.color == "w" ? piece.type = piece.type.toUpperCase() : piece.type = piece.type.toLowerCase();
                zobristPieces.push(transpositionTable[i][j][piece.type]);
            }
        }
    }

    for (var i = 0; i < zobristPieces.length; i++){
        zobristKey ^= zobristPieces[i];
    }

    return zobristKey;
}

/*
function evaluates position resulting from a single move
game.ugly_moves() returns all possible moves from the board
game.ugly_move() makes one legal move for a piece
*/
function evaluateBoard(move, prevSum, color){
    //calculate position in its corresponding PST
    //value of first index of array is the number of a vertical row
    //value of second index of array is the letter of horizontal row
    const from = [8 - Number(move.from[1]), move.from.charCodeAt(0) - 'a'.charCodeAt(0)]; //from whence the piece came from
    const to = [8 - Number(move.to[1]), move.to.charCodeAt(0) - 'a'.charCodeAt(0)]; //where the piece is now
    const board = game.board();
    var whitePieces = 0;
    var blackPieces = 0;

    //special occasions
    
    if (game.in_checkmate()){
        if (move.color === color){
            //we checkmated opponent
            prevSum += 10 ** 10;
        } else {
            prevSum -= 10 ** 10;
        }
    }

    if (prevSum < -1500){
        if (move.piece === "k"){
            move.piece = "k_e";
        } else if (move.captured === "k"){
            move.captured = "k_e";
        }
    }

    if ("captured" in move){
        if (move.color === color){
            //we captured opponent
            prevSum += (weights[move.captured] + opponent[move.color][move.captured][to[0]][to[1]]);
        } else {
            //opponent captures us
            prevSum -= (weights[move.captured] + self[move.color][move.captured][to[0]][to[1]]);
        }
    }

    //regular moves

    if (move.flags.includes("p")){
        //promotion!
        move.promotion = "q";
        if (move.color === color){
            prevSum -= (weights[move.piece] + self[move.color][move.piece][from[0]][from[1]]);
            prevSum += (weights[move.promotion] + self[move.color][move.promotion][to[0]][to[1]]);
        } else {
            prevSum += (weights[move.piece] + self[move.color][move.piece][from[0]][from[1]]);
            prevSum -= (weights[move.promotion] + self[move.color][move.promotion][to[0]][to[1]]);
        }
    } else {
        //just a move, not a promotion. weighting is based on PSTs
        if (move.color !== color){
            prevSum += self[move.color][move.piece][from[0]][from[1]];
            prevSum -= self[move.color][move.piece][to[0]][to[1]];
        } else {
            prevSum -= self[move.color][move.piece][from[0]][from[1]];
            prevSum += self[move.color][move.piece][to[0]][to[1]];
        }
    }

    return prevSum;
}

//import flags and bits from chess.js
var FLAGS = {
    NORMAL: 'n',
    CAPTURE: 'c',
    BIG_PAWN: 'b',
    EP_CAPTURE: 'e',
    PROMOTION: 'p',
    KSIDE_CASTLE: 'k',
    QSIDE_CASTLE: 'q',
}

var BITS = {
    NORMAL: 1,
    CAPTURE: 2,
    BIG_PAWN: 4,
    EP_CAPTURE: 8,
    PROMOTION: 16,
    KSIDE_CASTLE: 32,
    QSIDE_CASTLE: 64,
}

function sortMoves(children){
    for (var i = 0; i < children.length; i++){
        //generate pretty flags
        const move = children[i];
        var flags = "";
        
        for (var flag in BITS){
            if (BITS[flag] & move.flags){
                flags += FLAGS[flag];
            }
        }
        
        move.prettyFlags = flags;
        
        move.importance = 0
            + move.prettyFlags.includes("p") ? 16 : 0
            + move.prettyFlags.includes("c") ? 8 : 0;
    }
    children.sort((a, b) => b.importance - a.importance);
}

function minimax(game, depth, alpha, beta, isMaximizingPlayer, sum, color){
    var children;
    
    //check for pre-existing calculated nodes
    const history = zobristHistory[calculateZobrist(game.board())];
    if (history){
        if (history[2] > depth){
            return [null, history[1]];
        } else {
            children = game.ugly_moves({verbose: true});
            //sortMoves(children);
            var preMoveIndex;
            for (var i = 0; i < children.length; i++){
                if (JSON.stringify(children[i]) == JSON.stringify(history[0])){
                    preMoveIndex = i;
                    break;
                }
            }
            if (preMoveIndex){
                children.splice(preMoveIndex, 1);
                children.unshift(history[0]);
            }
        }
    }
    
    if (children == undefined){
        children = game.ugly_moves({verbose: true});
        sortMoves(children);
    }

    if (depth == 0 || children.length == 0){
        return [null, sum];
    }

    var maxValue = -Infinity;
    var minValue = Infinity;
    var newSum;
    var bestMoveVerbose;
    var bestMove;

    for (var i = 0; i < children.length; i++){
        positionsEvaluated++;
        const currentMove = children[i];
        const currentPrettyMove = game.ugly_move(currentMove);

        newSum = evaluateBoard(currentPrettyMove, sum, color);
        const [childBestMove, childValue] = minimax(game, depth - 1, alpha, beta, !isMaximizingPlayer, newSum, color);

        if (isMaximizingPlayer){
            if (childValue > maxValue){
                maxValue = childValue;
                bestMove = currentPrettyMove;
                bestMoveVerbose = currentMove;
            }
            if (childValue > alpha){
                alpha = childValue;
            }
        } else {
            if (childValue < minValue){
                minValue = childValue;
                bestMove = currentPrettyMove;
                bestMoveVerbose = currentMove;
            }
            if (childValue < beta){
                beta = childValue;
            }
        }

        game.undo();

        if (alpha >= beta) break;
    }

    globalSum = newSum;

    if (isMaximizingPlayer){
        zobristHistory[calculateZobrist(game.board())] = [bestMoveVerbose, maxValue, depth];
        return [bestMove, maxValue];
    } else {
        zobristHistory[calculateZobrist(game.board())] = [bestMoveVerbose, minValue, depth];
        return [bestMove, minValue];
    }
}