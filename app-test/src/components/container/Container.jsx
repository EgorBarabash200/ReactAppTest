import React, { useEffect, useState } from "react";
import cl from "./Container.module.css";
import FromCard from "../fromCard/FromCard";
import ListCards from "../listCards/ListCards";
import { getDataCards } from "../../API/CardServis";

const Container = () => {
  const [listCards, setListCards] = useState([]);

  const createCard = (newCard) => {
    setListCards([...listCards, newCard]);
  };
  useEffect(()=>{
    const getData = async ()=>{
      const data = await getDataCards();
      if(data){
        setListCards(data);
      }
    }
    getData();
  }, [])
  return (
    <div className={cl.mainContainer}>
      <FromCard create={createCard} />
      <ListCards cards={listCards} />
    </div>
  );
};

export default Container;
