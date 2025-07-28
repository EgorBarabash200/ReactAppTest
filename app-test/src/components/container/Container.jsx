import React, { useEffect, useState } from "react";
import cl from "./Container.module.css";
import FromCard from "../fromCard/FromCard";
import ListCards from "../listCards/ListCards";
import { getDataCards, deleteCards, putRedactCards } from "../../API/CardServis";

const Container = () => {
  const [listCards, setListCards] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getDataCards();
      if (data) {
        setListCards(data);
      }
    }
    getData();
  }, [])
  const removeCard = async (id) => {
    const data = await deleteCards(id);
    if (data) {
      setListCards(data);
    }
  };
  const redactCard = async (id, updatedCard) => {
    const data = await putRedactCards(id, updatedCard)
    if(data){
      setListCards(data);
    }
  }
  return (
    <div className={cl.mainContainer}>
      <FromCard setList={setListCards} />
      <ListCards cards={listCards} onDeleteCard={removeCard} onPutCard={redactCard} />
    </div>
  );
};

export default Container;
