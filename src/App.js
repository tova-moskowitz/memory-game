import "./App.css";
import GameBoard from "./components/gameBoard";
import bouquet from "./assets/img/bouquet.png";
import puzzle from "./assets/img/puzzle.png";
import flipflops from "./assets/img/flipflops.png";
import trees from "./assets/img/trees.png";
import usb from "./assets/img/usb.png";
import yarn from "./assets/img/yarn.png";

function App() {
  const symbols = [
    bouquet,
    puzzle,
    usb,
    trees,
    flipflops,
    yarn,
    bouquet,
    puzzle,
    flipflops,
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
