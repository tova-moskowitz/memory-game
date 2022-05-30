import react, { useState, useRef, useEffect } from "react";

const Card = (props) => {
  const faceUpCard = useRef();
  const isFaceUpRef = useRef(false);
  const cardRef = useRef("");
  const [compareCards, setCompareCards] = useState([]);
  const [count, setCount] = useState(0);
  const [clickedCard, setClickedCard] = useState("");
  const cardBack = "Memory";
  // console.log(isFaceUpRef.current);
  const getSymbolFromImgPath = (path) => {
    const splitUrl = path.split(".")[0].split("/");
    const cardSymbol = splitUrl[splitUrl.length - 1];
    return cardSymbol;
  };

  const clickHandler = (e) => {
    cardRef.current = e.target.id;
    setCount((count) => count + 1);
    faceUpCard.current = e.target.id;
    setClickedCard(faceUpCard.current);
    setCompareCards([...compareCards, faceUpCard.current]);
  };

  useEffect(() => {
    console.log(compareCards);

    // setTimeout(() => {
    //   if (isFaceUpRef.current !== cardRef.current) {
    //     isFaceUpRef.current = false;
    //   } else {
    //     isFaceUpRef.current = true;
    //     setCompareCards();
    //   }
    // }, 1000);
  }, [count]);

  const outputCards = () => {
    return props.symbols.map((symbolPath, i) => {
      const symbol = getSymbolFromImgPath(symbolPath);
      const id = i + "_" + symbol;
      console.log(id);
      console.log(cardRef.current);
      console.log(isFaceUpRef.current);
      if (id !== cardRef.current) {
        return (
          <div
            ref={isFaceUpRef}
            ref={cardRef}
            id={id}
            onClick={clickHandler}
            className="card"
          >
            <span className="cardBack">{cardBack}</span>
          </div>
        );
      } else if (id === cardRef.current) {
        isFaceUpRef.current = true;
        return (
          <div
            ref={isFaceUpRef}
            ref={cardRef}
            id={id}
            onClick={clickHandler}
            className="card faceUp"
          >
            <img className="symbol" src={symbolPath} />
          </div>
        );
      }
    });
  };
  return outputCards();
};
export default Card;
//

//   // compare 2 cards
//   // only allowed to click 2 squares
//   // turn cards over only after clicking the second square
//   // spread clickable area to whole div
//   // once clicked on, you should be able to reclick

// differentiate between the two alike symbols ------
// setInterval to turn cards back over
// populate symbols array with double symbols
// randomize output of symbols so doubles aren't next to each other

// output grid of cards ----------
// each card has a common background on the "back" ----------
// each card has a unique symbol on the "front" (repeated twice) ---------
// array of jpg/png names that is randomized and applied to cards
// click card, symbol shows => isFaceUpRef = true; --------------
// two cards match => isFaceUpRef remains true
// two cards don't match, setTimeout for 5 or so seconds
// after 5 seconds isFaceUpRef => false, background shows
