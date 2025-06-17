import React, { useState } from "react";
import cl from "./Container.module.css";
import FromCard from "../fromCard/FromCard";
import ListCards from "../listCards/ListCards";

const Container = () => {
  const [listCards, setListCards] = useState([]);

  const createCard = (newCard) => {
    setListCards([...listCards, newCard]);
  };
  return (
    <div className={cl.mainContainer}>
      <FromCard create={createCard} />
      <ListCards cards={listCards} />
    </div>
  );
};

export default Container;
