/*
DkeRess
Made by DkeRee

Important Info:
Try Obama bing chilling based 1984 taiwan belgium zamn british hog rider meow grass fuck kevin china koala amogus among us fortnite femboy cheetos post nft Hey AutoMod, did you know every based femboy cat fortnite player that makes me say "ZAMN" says meow but actually it is a pig and if not it is 1984 because Fuck Kevin. I am a koala from China(not taiwan +@ social credit) that moved to Belgium after selling all my NFT and is covered in cum standing on grass. Big brother are those cat femboys from Taiwan, China, Belgium, Fortnite, Britain, or 69420? Looks like it was a nft made in 1984 based on amogus touching grass. Either way, Fuck Kevin and a meow koala cum semen on grass in Japan Balls
*/

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
var inOpening = true;
var initialDepth = 1;
var positionsEvaluated = 0;
var globalSum = 0;
var bestMove;

//MAIN
async function dkeress(game, alpha, beta, isMaximizingPlayer, color){
    if (inOpening){
        const response = await fetch(`https://explorer.lichess.ovh/lichess?variant=standard&fen=${game.fen()}`);
        const data = await response.json();
        const moves = data.moves;

        if (moves.length == 0){
            inOpening = false;
            return dkeress(game, alpha, beta, isMaximizingPlayer, color);
        } else {
            const epicMove = game.move_from_san(moves[0].san, true);
            globalSum = evaluateBoard(epicMove, globalSum, color);
            return epicMove;
        }
    } else {
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
        return bestMove[0];
    }   
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
    var whitePieces = 0;
    var blackPieces = 0;

    //special occasions
    
    if (game.in_checkmate()){
        if (move.color === color){
            //we checkmated opponent
            return 10 ** 10;
        } else {
            return -(10 ** 10);
        }
    }
    
    if (game.in_draw() || game.in_threefold_repetition() || game.in_stalemate()){
        return 0;
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

// MVV_VLA[victim][attacker]
const MVV_LVA = [
    [0, 0, 0, 0, 0, 0, 0],       // victim K, attacker K, Q, R, B, N, P, None
    [50, 51, 52, 53, 54, 55, 0], // victim Q, attacker K, Q, R, B, N, P, None
    [40, 41, 42, 43, 44, 45, 0], // victim R, attacker K, Q, R, B, N, P, None
    [30, 31, 32, 33, 34, 35, 0], // victim B, attacker K, Q, R, B, N, P, None
    [20, 21, 22, 23, 24, 25, 0], // victim N, attacker K, Q, R, B, N, P, None
    [10, 11, 12, 13, 14, 15, 0], // victim P, attacker K, Q, R, B, N, P, None
    [0, 0, 0, 0, 0, 0, 0],       // victim None, attacker K, Q, R, B, N, P, None
];

function MVV_LVACALC(piece){
    switch (piece){
        case "k":
            return 0;
            break;
        case "q":
            return 1;
            break;
        case "r":
            return 2;
            break;
        case "b":
            return 3;
            break;
        case "n":
            return 4;
            break;
        case "p":
            return 5;
            break;
        case undefined:
            return 6;
            break;
    }
}

function sortMoves(children){
    for (var i = 0; i < children.length; i++){
        //victim, attacker||Victim is opponent, attacker is me
        const move = children[i];
        move.importance = MVV_LVA[MVV_LVACALC(move.captured)][MVV_LVACALC(move.piece)];
    }
    children.sort((a, b) => {return b.importance - a.importance});
}

function qSearch(sum, color, alpha, beta, isMaximizingPlayer){
    const allCaptures = game.ugly_moves({verbose: true}).filter(move => "captured" in move);
    
    if (allCaptures.length == 0){
        return sum;
    }
    
    var maxValue = -Infinity;
    var minValue = Infinity;
    
    for (var i = 0; i < allCaptures.length; i++){
        const currentMove = allCaptures[i];
        const currentPrettyMove = game.ugly_move(currentMove);
        
        const newSum = evaluateBoard(currentPrettyMove, sum, color);
        const qResult = qSearch(newSum, color, alpha, beta, !isMaximizingPlayer);
        
        if (isMaximizingPlayer){
            if (qResult > maxValue){
                maxValue = qResult;
            }
            if (qResult > alpha){
                alpha = qResult;
            }
        } else {
            if (qResult < minValue){
                minValue = qResult;
            }
            if (qResult < beta){
                beta = qResult;
            }
        }
        
        game.undo();
        
        if (alpha >= beta) break;
    }
    
    if (isMaximizingPlayer){
        return maxValue;
    } else {
        return minValue;
    }
}

function minimax(game, depth, alpha, beta, isMaximizingPlayer, sum, color){
    var children;
    //check for pre-existing calculated nodes
    const history = zobristHistory[calculateZobrist(game.board())];
    if (history){
        if (history.depth > depth && ((history.state == "over" && history.score < alpha) || (history.state == "under" && history.score > beta))){
            return [null, history.score];
        } else {
            children = game.ugly_moves({verbose: true});
            children.sort(() => {return 0.5 - Math.random()});
            //sortMoves(children);
            var preMoveIndex;
            for (var i = 0; i < children.length; i++){
                if (JSON.stringify(children[i]) == JSON.stringify(history.bestMoveVerbose)){
                    preMoveIndex = i;
                    break;
                }
            }
            if (preMoveIndex){
                children.splice(preMoveIndex, 1);
                children.unshift(history.bestMoveVerbose);
            }
        }
    }
    
    if (children == undefined){
        children = game.ugly_moves({verbose: true});
        children.sort(() => {return 0.5 - Math.random()});
        //sortMoves(children);
    }

    //qSearch(sum, color, alpha, beta, isMaximizingPlayer)
    
    if (depth == 0 || children.length == 0){
        return [null, sum];
    }

    var maxValue = -Infinity;
    var minValue = Infinity;
    var state;
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

        if (alpha >= beta){
            if (isMaximizingPlayer){
                state = "under";
            } else {
                state = "over";
            }
            break;
        }
    }

    globalSum = newSum;

    if (isMaximizingPlayer){
        zobristHistory[calculateZobrist(game.board())] = {
            bestMoveVerbose: bestMoveVerbose,
            score: maxValue,
            state: state,
            depth: depth
        };
        return [bestMove, maxValue];
    } else {
        zobristHistory[calculateZobrist(game.board())] = {
            bestMoveVerbose: bestMoveVerbose,
            score: minValue,
            state: state,
            depth: depth
        };
        return [bestMove, minValue];
    }
}