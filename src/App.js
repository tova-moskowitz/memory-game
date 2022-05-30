import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card";
import GameBoard from "./components/gameBoard";
import bouquet from "./assets/img/bouquet.png";
import puzzle from "./assets/img/puzzle.png";
import flipFlops from "./assets/img/flipFlops.png";
import trees from "./assets/img/trees.png";
import usb from "./assets/img/usb.png";
import yarn from "./assets/img/yarn.png";

function App() {
  const symbols = [
    bouquet,
    puzzle,
    usb,
    trees,
    flipFlops,
    yarn,
    bouquet,
    puzzle,
    flipFlops,
    trees,
    usb,
    yarn,
  ];
  return (
    <>
      <h1 id="title">MEMORY</h1>
      <div className="gameBoard">
        <GameBoard symbols={symbols} />
      </div>
    </>
  );
}

export default App;
