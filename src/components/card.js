import { useState, useRef, useEffect } from "react";
import cardBacking from "../assets/img/cardBack.jpeg";

const Card = (props) => {
  let [shuffledCards, setShuffledCards] = useState([]);
  let [matches, setMatches] = useState([]);
  let [activeCards, setActiveCards] = useState([]);
  let [movesCount, setMovesCount] = useState(1);
  const faceUpCardId = useRef(null);

  const getSymbolFromImgPath = (path) => {
    const splitUrl = path.split(".")[0].split("/");
    const cardSymbol = splitUrl[splitUrl.length - 1];
    return cardSymbol;
  };

  const returnShuffledCards = () => {
    return props.symbols
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  const clickCardHandler = (e) => {
    faceUpCardId.current = e.currentTarget.id;
    if (activeCards.length < 2 && !activeCards.includes(faceUpCardId.current)) {
      setActiveCards([...activeCards, faceUpCardId.current]);
    }
  };

  const shuffleOnClick = () => {
    setShuffledCards(returnShuffledCards());
    setActiveCards([]);
    setMatches([]);
    setMovesCount(1);
  };

  useEffect(() => {
    if (activeCards.length === 2 && activeCards[0] !== activeCards[1]) {
      setMovesCount((count) => count + 1);
      setTimeout(() => {
        const symbol = activeCards.map((card) =>
          card.replace(/[^a-zA-Z]/g, "")
        );

        if (symbol[0] === symbol[1]) {
          setMatches((matches) => [...matches, symbol[0]]);
        }
        setActiveCards([]);
        console.log("Time's Up!");
      }, 500);
    }

    if (matches.length === props.symbols.length / 2) {
      alert(`"WINNER!! You found all the matches in ${movesCount} turns!"`);
    }
  }, [activeCards]);

  let output = "";
  const symbols = shuffledCards.length ? shuffledCards : props.symbols;
  const outputCards = () => {
    {
      output = symbols.map((symbolPath, i) => {
        let cardBackOrFront = "";
        const symbol = getSymbolFromImgPath(symbolPath);
        const id = i + "_" + symbol;

        if (matches.includes(symbol) || activeCards.includes(id)) {
          cardBackOrFront = <img className="symbol" src={symbolPath} />;
        } else {
          cardBackOrFront = <img className="cardBack" src={cardBacking} />;
        }
        return (
          <div key={i} id={id} onClick={clickCardHandler} className="card">
            {cardBackOrFront}
          </div>
        );
      });
    }

    return (
      <>
        {output}
        <button id="reshuffleBtn" onClick={shuffleOnClick}>
          Reshuffle
        </button>
      </>
    );
  };
  return outputCards();
};
export default Card;
