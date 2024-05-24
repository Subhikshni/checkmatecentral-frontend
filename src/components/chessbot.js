import React, { useState, useEffect, useCallback } from "react";
import { Chess } from "chess.js";
import Chessboard from "chessboardjsx";
import "../css/chessbot.css";
import NavBar2 from "./NavBar2.js";

const ChessBot = () => {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState(game.fen());
  const [playerColor, setPlayerColor] = useState("w"); // Default to white
  const [promotionMove, setPromotionMove] = useState(null);
  const [showPromotionModal, setShowPromotionModal] = useState(false);
  const [theme, setTheme] = useState("default"); // Default theme
  const [moveHistory, setMoveHistory] = useState([]);
  const [highlightedSquares, setHighlightedSquares] = useState([]);
  const [gameResult, setGameResult] = useState(null);
  const [showResultModal, setShowResultModal] = useState(false);

  useEffect(() => {
    console.log("Game instance:", game);
    console.log("Available methods:", Object.keys(game));
  }, [game]);

  const isGameOver = useCallback(() => {
    if (game.isCheckmate()) {
      setGameResult(
        game.turn() === "w"
          ? "Black wins by checkmate!"
          : "White wins by checkmate!"
      );
      setShowResultModal(true);
      return true;
    } else if (game.isStalemate()) {
      setGameResult("Draw by stalemate!");
      setShowResultModal(true);
      return true;
    } else if (game.isInsufficientMaterial()) {
      setGameResult("Draw by insufficient material!");
      setShowResultModal(true);
      return true;
    } else if (game.isThreefoldRepetition()) {
      setGameResult("Draw by threefold repetition!");
      setShowResultModal(true);
      return true;
    } else if (game.isDraw()) {
      setGameResult("Draw!");
      setShowResultModal(true);
      return true;
    }
    return false;
  }, [game]);

  const makeBotMove = useCallback(() => {
    if (isGameOver()) return;
    if (game.turn() !== playerColor) {
      const moves = game.moves();
      const move = moves[Math.floor(Math.random() * moves.length)];
      game.move(move);
      setFen(game.fen());
      setMoveHistory(game.history({ verbose: true }));
    }
  }, [game, isGameOver, playerColor]);

  useEffect(() => {
    if (game.turn() !== playerColor && !isGameOver()) {
      setTimeout(makeBotMove, 500);
    }
  }, [game, makeBotMove, isGameOver, playerColor]);

  const handlePieceClick = (square) => {
    const moves = game.moves({ square, verbose: true });
    const moveSquares = moves.map((move) => move.to);
    setHighlightedSquares(moveSquares);
  };

  const handlePromotion = (promotion) => {
    const move = promotionMove;
    move.promotion = promotion;
    game.move(move);
    setFen(game.fen());
    setShowPromotionModal(false);
    setPromotionMove(null);

    if (!isGameOver()) {
      setTimeout(makeBotMove, 500);
    }
  };

  const onDrop = ({ sourceSquare, targetSquare }) => {
    if (game.turn() !== playerColor) return;

    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // Default promotion, will be overridden by modal
    });

    if (move === null) return;

    if (
      (targetSquare[1] === "8" && sourceSquare[1] === "7") ||
      (targetSquare[1] === "1" && sourceSquare[1] === "2")
    ) {
      game.undo();
      setPromotionMove({ from: sourceSquare, to: targetSquare });
      setShowPromotionModal(true);
    } else {
      setFen(game.fen());
      setMoveHistory(game.history({ verbose: true }));
      if (!isGameOver()) {
        setTimeout(makeBotMove, 500);
      }
    }
  };

  const togglePlayerColor = () => {
    setPlayerColor(playerColor === "w" ? "b" : "w");
    const newGame = new Chess();
    setGame(newGame);
    setFen(newGame.fen());
    setMoveHistory([]);
    setGameResult(null);
    setShowResultModal(false);
  };

  const undoLastTwoMoves = () => {
    game.undo();
    game.undo();
    setFen(game.fen());
    setMoveHistory(game.history({ verbose: true }));
  };

  return (
    <div className="chess-container">
      <NavBar2 />
      <div className="content">
        <div className="button-container">
          <button onClick={togglePlayerColor} className="play-as-button">
            Play as {playerColor === "w" ? "Black" : "White"}
          </button>
          <button onClick={undoLastTwoMoves} className="undo-button">
            Undo Move
          </button>
        </div>
        <Chessboard
          className="chessboard"
          position={fen}
          onDrop={onDrop}
          onMouseOverSquare={handlePieceClick}
          onMouseOutSquare={() => setHighlightedSquares([])}
          squareStyles={{
            ...highlightedSquares.reduce((obj, square) => {
              obj[square] = { backgroundColor: "rgba(255, 255, 0, 0.4)" };
              return obj;
            }, {}),
          }}
          transitionDuration={300}
          orientation={playerColor === "w" ? "white" : "black"}
          width={500}
        />
        <div className="move-history-container">
          <div className="move-history">
            <h3>Move History</h3>
            <ul>
              {moveHistory.map((move, index) => (
                <li key={index}>
                  {index % 2 === 0 ? "White" : "Black"} - {move.san}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {showPromotionModal && (
        <div className="modal">
          <h3>Choose Promotion Piece</h3>
          <div className="promotion-buttons">
            <button onClick={() => handlePromotion("q")}>Queen</button>
            <button onClick={() => handlePromotion("r")}>Rook</button>
            <button onClick={() => handlePromotion("b")}>Bishop</button>
            <button onClick={() => handlePromotion("n")}>Knight</button>
          </div>
        </div>
      )}
      {showResultModal && (
        <div className="modal">
          <h3>Game Over</h3>
          <p>{gameResult}</p>
          <button onClick={() => setShowResultModal(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ChessBot;
