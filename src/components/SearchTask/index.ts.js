import React from "react";
import "./styles.css";

const SearchTask = () => {
  const handlerInput = (event) => {
    console.log(event.target.value);
  };

  return (
    <input
      className="searchTask__input"
      type="text"
      placeholder="Ingresa tu nueva tarea"
      onChange={handlerInput}
    />
  );
};

export { SearchTask };
