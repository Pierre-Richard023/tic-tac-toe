import { useAppSelector } from "../../utils/hooks";
import Square from "../square/square";
import "./board.css";

const Board = () => {
  const square = useAppSelector((state) => state.game.squarePosition);

  return (
    <>
      <div className="board">
        {square.map((obj, indx) => (
          <Square key={indx} position={obj} />
        ))}
      </div>
    </>
  );
};

export default Board;
