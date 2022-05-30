import react, { useState, useEffect } from "react";
import Card from "../components/card";

const GameBoard = (props) => {
  return <Card symbols={props.symbols} />;
};

export default GameBoard;
