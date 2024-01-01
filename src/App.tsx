import { Provider } from "react-redux";
import { store } from "./store/store";
import Game from "./components/game/game";

const App = () => {
  return (
      <Provider store={store}>
        <Game />
      </Provider>
  );
};

export default App;
