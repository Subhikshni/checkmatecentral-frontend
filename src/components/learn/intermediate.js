import React from "react";
import NavBar2 from "../NavBar2.js";
import "./intermediate.css";

const Intermediate = () => {
  return (
    <div className="intermediate-container">
      <NavBar2 />
      <h2>Intermediate Module</h2>

      <section className="section">
        <h3>Chess Openings</h3>
        <p>
          Chess openings are critical to set up a strong position in the middle
          game. Here are some common opening strategies:
        </p>
        <ul>
          <li>
            <strong>King's Pawn Opening:</strong> Push the pawn in front of your
            King forward two squares (e4) to control the center and free up your
            pieces.
          </li>
          <li>
            <strong>Queen's Gambit:</strong> Sacrifice a pawn to gain control of
            the center and develop your pieces aggressively.
          </li>
          <li>
            <strong>Sicilian Defense:</strong> Counterattack against White's
            central pawn by playing c5, aiming to control the d4 square and
            challenge White's center.
          </li>
        </ul>
      </section>

      <section className="section">
        <h3>Middle Game Strategies</h3>
        <p>
          In the middle game, players aim to improve the position of their
          pieces and create threats against the opponent. Here are some key
          strategies:
        </p>
        <ul>
          <li>
            <strong>Control of the Center:</strong> Maintain control of the
            center squares (e4, d4, e5, d5) to restrict your opponent's options
            and create opportunities for your pieces.
          </li>
          <li>
            <strong>Piece Development:</strong> Develop your pieces to active
            squares, such as the central squares or squares that control key
            diagonals and files.
          </li>
          <li>
            <strong>Pawn Structures:</strong> Pay attention to pawn structure
            changes and plan your moves accordingly. Aim to create weaknesses in
            your opponent's pawn structure while avoiding weaknesses in your
            own.
          </li>
        </ul>
      </section>

      <section className="section">
        <h3>Endgame Techniques</h3>
        <p>
          The endgame is the stage of the game where there are fewer pieces on
          the board, and players focus on promoting pawns, creating passed
          pawns, and executing checkmates. Here are some essential endgame
          techniques:
        </p>
        <ul>
          <li>
            <strong>Basic Checkmates:</strong> Learn how to checkmate with a
            King and Queen, King and Rook, and King and two bishops.
          </li>
          <li>
            <strong>King and Pawn Endgames:</strong> Understand key concepts
            like opposition, pawn promotion, and the opposition rule.
          </li>
          <li>
            <strong>Rook Endgames:</strong> Master techniques such as the Lucena
            position and Philidor's Defense for winning Rook endgames.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Intermediate;
