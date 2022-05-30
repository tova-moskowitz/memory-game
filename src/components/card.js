import react, { useState, useRef, useEffect } from "react";

const Card = (props) => {
  let [count, setCount] = useState(0);
  let faceUpCard = useRef("");
  let isFaceUp = useRef(false);
  const [clickedCard, setClickedCard] = useState("");
  const cardBack = "Memory";

  const turnOverCard = (e) => {
    setCount((count) => (count += 1));

    faceUpCard.current = e.target.id;
    isFaceUp.current = true;
    setClickedCard(faceUpCard.current);
  };
  // compare 2 cards
  // only allowed to click 2 squares
  // turn cards over only after clicking the second square
  // spread clickable area to whole div
  // once clicked on, you should be about to reclick

  useEffect(() => {
    setTimeout(() => {
      if (isFaceUp.current) {
        isFaceUp.current = false;
        console.log(count);
      } else {
        isFaceUp.current = true;
      }
    }, 1000);
  }, [isFaceUp.current]);

  const outputCards = (isFaceUp) => {
    return props.card.map((card) => {
      if (!isFaceUp) {
        return (
          <div id={props.id} onClick={turnOverCard} className="card">
            <span className="symbol">{cardBack}</span>
          </div>
        );
      } else if (faceUpCard.current === clickedCard && isFaceUp) {
        return (
          <div id={props.id} onClick={turnOverCard} className="card faceUp">
            <img className="symbol" src={card} />
          </div>
        );
      }
    });
  };

  return outputCards(isFaceUp.current);
};
export default Card;

// differentiate between the two alike symbols ------
// setInterval to turn cards back over
// populate symbols array with double symbols
// randomize output of symbols so doubles aren't next to each other

// output grid of cards
// each card has a common background on the "back"
// each card has a unique symbol on the "front" (repeated twice)
// array of jpg/png names that is randomized and applied to cards
// click card, symbol shows => isFaceUp = true;
// two cards match => isFaceUp remains true
// two cards don't match, setTimeout for 5 or so seconds
// after 5 seconds isFaceUp => false, background shows
