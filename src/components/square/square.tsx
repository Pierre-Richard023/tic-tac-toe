import { play } from "../../store/reducer/gameReducer";
import { useAppDispatch } from "../../utils/hooks";
import "./square.css";
import NinjaBlack from "../../assets/ninja-black.svg";
import NinjaRed from "../../assets/ninja-red.svg";
import { Position } from "../../interface/position";

interface para {
  position: Position
}

const Square = ({ position }: para) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(play(position.position));
  };

  return (
    <>
      <div className="square" onClick={handleClick}>
        {position.value != null && <img className="ninja-svg" src={position.value == "red" ? NinjaRed : NinjaBlack } alt={position.value} />}
      </div>
    </>
  );
};

export default Square;
