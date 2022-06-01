import react, { useState, useRef, useEffect } from "react";
import cardBacking from "../assets/img/cardBack.jpeg";

const Card = (props) => {
  let [matches, setMatches] = useState([]);
  let [activeCards, setActiveCards] = useState([]);
  const faceUpCardId = useRef(null);

  // console.log(props.symbols);
  const getSymbolFromImgPath = (path) => {
    const splitUrl = path.split(".")[0].split("/");
    const cardSymbol = splitUrl[splitUrl.length - 1];
    return cardSymbol;
  };

  const clickHandler = (e) => {
    faceUpCardId.current = e.currentTarget.id;
    if (activeCards.length < 2 && !activeCards.includes(faceUpCardId.current)) {
      setActiveCards([...activeCards, faceUpCardId.current]);
    }
  };

  useEffect(() => {
    if (activeCards.length === 2 && activeCards[0] !== activeCards[1]) {
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

    console.log(matches);
    if (matches.length === props.symbols.length / 2) {
      alert("WINNER!!");
    }
  }, [activeCards]);

  const outputCards = () => {
    return props.symbols.map((symbolPath, i) => {
      let cardBackOrFront = "";
      const symbol = getSymbolFromImgPath(symbolPath);
      const id = i + "_" + symbol;

      if (matches.includes(symbol) || activeCards.includes(id)) {
        cardBackOrFront = <img className="symbol" src={symbolPath} />;
      } else {
        cardBackOrFront = <img className="cardBack" src={cardBacking} />;
      }
      return (
        <div key={i} id={id} onClick={clickHandler} className="card">
          {cardBackOrFront}
        </div>
      );
    });
  };
  return outputCards();
};
export default Card;

// shuffle on reload and button click
// WINNER

// populate symbols array with double symbols-------------
// randomize output of symbols so doubles aren't next to each other-----------
// spread clickable area to whole div-----------------
// sometimes you can't click for some reason---------------
// compare 2 cards ----------
// only allowed to click 2 squares -----------
// turn cards over only after clicking the second square ---------
// don't turn over after match is found ------------
// once clicked on, you should be able to reclick---------
// differentiate between the two alike symbols ------
// setInterval to turn cards back over ---------------
// output grid of cards ----------
// each card has a common background on the "back" ----------
// each card has a unique symbol on the "front" (repeated twice) ---------
// click card, symbol shows => isFaceUpRef = true; --------------
// two cards don't match, setTimeout for 5 or so seconds ------------
// after 5 seconds background shows --------
