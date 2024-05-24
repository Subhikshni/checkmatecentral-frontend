import React from "react";
import NavBar2 from "../NavBar2.js";
import Chessboard from "chessboardjsx";
import "./beginner.css";

const Section = ({ title, children }) => (
  <section className="section">
    <h3>{title}</h3>
    {children}
  </section>
);

const PieceDescription = ({ pieceClass, pieceName, description }) => (
  <Section title={pieceName}>
    <div className={`piece ${pieceClass}`} aria-label={pieceName}></div>
    <p>{description}</p>
  </Section>
);

const Beginner = () => {
  return (
    <div className="beginner-container">
      <NavBar2 />
      <h2>Beginner Module</h2>

      <Section title="Chess Board">
        <p>
          The chessboard consists of 64 squares arranged in an 8x8 grid. It is
          divided into light and dark squares. The chessboard is essential for
          playing the game of chess and is where the pieces are placed and moved
          during the game.
        </p>
        <div className="chessboard-container">
          <Chessboard orientation="white" width={400} position="start" />
        </div>
      </Section>

      <Section title="Chess Pieces">
        <p>
          Chess is played with six different types of pieces: the King, Queen,
          Rook, Bishop, Knight, and Pawn. Each piece moves in a unique way:
        </p>
        <div className="chess-image-container">
          {/* The chess pieces will be positioned here */}
        </div>
      </Section>

      <PieceDescription
        pieceClass="king"
        pieceName="King"
        description="The King can move one square in any direction. The primary objective of the game is to checkmate the opponent's King."
      />

      <PieceDescription
        pieceClass="queen"
        pieceName="Queen"
        description="The Queen can move any number of squares diagonally, horizontally, or vertically. It is the most powerful piece on the board."
      />

      <PieceDescription
        pieceClass="rook"
        pieceName="Rook"
        description="The Rook can move any number of squares horizontally or vertically. It is particularly powerful in controlling open files and ranks."
      />

      <PieceDescription
        pieceClass="bishop"
        pieceName="Bishop"
        description="The Bishop can move any number of squares diagonally. Each player starts with two Bishops, one on a light square and one on a dark square."
      />

      <PieceDescription
        pieceClass="knight"
        pieceName="Knight"
        description="The Knight moves in an L-shape: two squares in one direction and then one square perpendicular. It is the only piece that can jump over other pieces."
      />

      <PieceDescription
        pieceClass="pawn"
        pieceName="Pawn"
        description="Pawns move forward one square, but capture diagonally. On their first move, they have the option to move forward two squares. Pawns can be promoted to any other piece (except King) upon reaching the opponent's back rank."
      />

      <Section title="Easy Opening">
        <p>
          As a beginner, it's important to focus on developing your pieces and
          controlling the center of the board. One easy opening strategy is the
          <em> Italian Game:</em>
        </p>
        <ol>
          <li>
            Move the pawn in front of your King two squares forward to control
            the center (e4).
          </li>
          <li>
            Develop your knight to f3, supporting the center pawn and preparing
            for future development.
          </li>
          <li>
            Develop your bishop to c4, putting pressure on the vulnerable f7
            square.
          </li>
          <li>Castle kingside to protect your King and connect your rooks.</li>
        </ol>
        <p>
          This simple opening focuses on controlling the center, developing your
          pieces, and preparing for a strong midgame position.
        </p>
      </Section>
    </div>
  );
};

export default Beginner;
