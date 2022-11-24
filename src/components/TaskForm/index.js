import React, { useState } from "react";
import { TasksContext } from "../TasksContext";
import "./styles.css";

const TaskForm = () => {
  const [newTaskValue, setNewTaskValue] = useState("");

  const {
    addTask,
    setOpenModal,
  } = React.useContext(TasksContext);


  const onChange = (event) => {
    setNewTaskValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    addTask(newTaskValue);
    event.preventDefault();
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTaskValue}
        onChange={onChange}
        placeholder="Pon aquí tu nueva tarea :)"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
};

export { TaskForm };
