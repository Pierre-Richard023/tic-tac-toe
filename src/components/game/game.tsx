import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { checkIfSomeoneWin, reset } from "../../store/reducer/gameReducer";
import Board from "../board/board";
import NinjaBlack from "../../assets/ninja-black.svg";
import NinjaRed from "../../assets/ninja-red.svg";
import "./game.css";


const Game = () => {

  const dispatch = useAppDispatch();
  const square = useAppSelector((state) => state.game.squarePosition);
  const winner = useAppSelector((state) => state.game.winner);
  const value = useAppSelector((state) => state.game.value);
  const playable = useAppSelector((state) => state.game.playable);

  useEffect(() => {
    dispatch(checkIfSomeoneWin());
  }, [square]);

  return (
    <section className="game">
      <h1 className="title">Tic-tac-toe</h1>

      <div className="game-informations">
        {
          winner == null && playable &&
          <div className="game-informations-play">
            <p>Joueur :  </p>
            <img src={value == "red" ? NinjaRed : NinjaBlack} alt={value} />
          </div>
        }
        {!playable &&
          <div className="game-informations-play">
            {
              winner == null &&
              <p> Match nul !!</p>
            }
            {
              winner != null &&
              <>
                <img src={winner == "red" ? NinjaRed : NinjaBlack} alt={value} />
                <span>à gagné </span>
              </>
            }

          </div>}
      </div>

      <Board />

      <div className="game-action">
        <button
          className="btn"
          typeof="button"
          onClick={() => dispatch(reset())}
        >
          <span>Rejouer</span>
        </button>
      </div>
    </section>
  );
};

export default Game;
