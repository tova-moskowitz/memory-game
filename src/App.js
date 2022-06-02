import "./App.css";
import GameBoard from "./components/gameBoard";
import bouquet from "./assets/img/bouquet.png";
import puzzle from "./assets/img/puzzle.png";
import flipflops from "./assets/img/flipflops.png";
import trees from "./assets/img/trees.png";
import usb from "./assets/img/usb.png";
import yarn from "./assets/img/yarn.png";

function App() {
  let symbols = [bouquet, puzzle, usb, trees, flipflops, yarn];

  symbols = [...symbols, ...symbols];

  const returnShuffledCards = () => {
    return symbols
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  return (
    <>
      <h1 id="title">Find All the Matching Pairs! </h1>
      <div className="gameBoard">
        <GameBoard symbols={returnShuffledCards()} />
      </div>
    </>
  );
}

export default App;
