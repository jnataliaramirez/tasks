import React from "react";
import './styles.css'

const SearchTask = () => {
  return (
    <input
      className="searchTask__input"
      type="text"
      placeholder="Ingresa tu nueva tarea"
    />
  );
};

export { SearchTask };
