import react, { useState, useEffect } from "react";
import Card from "../components/card";

const GameBoard = (props) => {
  let idCount = 0;

  const getSymbolFromImgPath = (path) => {
    const splitUrl = path.split(".")[0].split("/");
    const cardSymbol = splitUrl[splitUrl.length - 1];
    return cardSymbol;
  };

  return props.symbols.map((card) => {
    idCount++;
    return (
      <Card id={idCount + "_" + getSymbolFromImgPath(card)} card={[card]} />
    );
  });
};

export default GameBoard;
