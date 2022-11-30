import React from "react";
import { useContext } from "react";
import { TasksContext } from "../TasksContext";
import "./styles.css";

const SearchTask = () => {
  const { searchValue, setSearchValue } = useContext(TasksContext);

  const onChangeValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="searchTask__input"
      type="text"
      placeholder="Ingresa tu nueva tarea"
      value={searchValue}
      onChange={onChangeValue}
    />
  );
};

export { SearchTask };
