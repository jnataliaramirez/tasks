import React from "react";
import "./styles.css";

const SearchTask = ( props ) => {
  const onChangeValue = (event) => {
    props.changeValue(event.target.value);
  };

  return (
    <>
      <input
        className="searchTask__input"
        type="text"
        placeholder="Ingresa tu nueva tarea"
        value={props.value}
        onChange={onChangeValue}
      />
    </>
  );
};

export { SearchTask };
