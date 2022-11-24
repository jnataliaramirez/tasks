import React from "react";
import { useContext } from "react";
import { TasksContext } from "../TasksContext";
import "./styles.css";

const SearchTask = () => {
  const { searchValue,  handlerInput } = useContext(TasksContext);

  const onChangeValue = (event) => {
    handlerInput(event.target.value);
  };

  return (
    <>
      <input
        className="searchTask__input"
        type="text"
        placeholder="Ingresa tu nueva tarea"
        value={searchValue}
        onChange={onChangeValue}
      />
    </>
  );
};

export { SearchTask };
