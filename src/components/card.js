import react, { useState, useRef, useEffect } from "react";

const Card = (props) => {
  let [matches, setMatches] = useState([]);
  let [activeCards, setActiveCards] = useState([]);
  const faceUpCardId = useRef(null);
  const cardBack = "Memory";
  let cardBackOrFront = "";

  const getSymbolFromImgPath = (path) => {
    const splitUrl = path.split(".")[0].split("/");
    const cardSymbol = splitUrl[splitUrl.length - 1];
    return cardSymbol;
  };

  const clickHandler = (e) => {
    faceUpCardId.current = e.target.id;

    if (activeCards.length < 2) {
      setActiveCards([...activeCards, faceUpCardId.current]);
    }
  };

  useEffect(() => {
    if (activeCards.length === 2) {
      setTimeout(() => {
        const strippedIds = activeCards.map((card) =>
          card.replace(/[^a-z]/g, "")
        );

        if (strippedIds[0] === strippedIds[1]) {
          matches.push(strippedIds[0]);
          // setMatches((matches) => [...matches, strippedIds[0]]);
        }

        setActiveCards([]);
        console.log("time's up");
      }, 5000);
    }
  }, [activeCards]);

  const outputCards = () => {
    return props.symbols.map((symbolPath, i) => {
      const symbol = getSymbolFromImgPath(symbolPath);
      const id = i + "_" + symbol;
      cardBackOrFront =
        matches.includes(symbol) ||
        (activeCards.includes(id) && activeCards.length <= 2) ? (
          <img className="symbol" src={symbolPath} />
        ) : (
          <span className="cardBack">{cardBack}</span>
        );
      return (
        <div ref={faceUpCardId} id={id} onClick={clickHandler} className="card">
          {cardBackOrFront}
        </div>
      );
    });
  };
  return outputCards();
};
export default Card;
//

// shuffle on reload
// populate symbols array with double symbols
// randomize output of symbols so doubles aren't next to each other
// WINNER
// spread clickable area to whole div
// sometimes you can't click for some reason
// array of jpg/png names that is randomized and applied to cards

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
