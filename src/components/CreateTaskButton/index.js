import { React } from "react";
import "./styles.css";

const CreateTaskButton = () => {
  const handlerNewTaks = () => {
    alert("Añadir tarea");
  };

  return (
    <button onClick={handlerNewTaks} className="createTaskButton__button">
      +
    </button>
  );
};

export { CreateTaskButton };
