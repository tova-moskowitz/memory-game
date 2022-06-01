import "./App.css";
import GameBoard from "./components/gameBoard";
import bouquet from "./assets/img/bouquet.png";
import puzzle from "./assets/img/puzzle.png";
import flipflops from "./assets/img/flipflops.png";
import trees from "./assets/img/trees.png";
import usb from "./assets/img/usb.png";
import yarn from "./assets/img/yarn.png";

function App(props) {
  let symbols = [bouquet, puzzle, usb, trees, flipflops, yarn];
  let shuffled = [];

  symbols = [...symbols, ...symbols];

  const shuffleCards = () => {
    shuffled = symbols.map((value) => ({ value, sort: Math.random() }));
    shuffled = shuffled.sort((a, b) => a.sort - b.sort);
    let mapping = shuffled.map(({ value }) => value);
    return mapping;
  };

  return (
    <>
      <h1 id="title">Find All the Matching Pairs! </h1>
      <div className="gameBoard">
        <GameBoard symbols={shuffleCards()} />
        <button id="reshuffleBtn">Reshuffle</button>
      </div>
    </>
  );
}

export default App;
