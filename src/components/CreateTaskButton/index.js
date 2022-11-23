import { React } from "react";
import "./styles.css";

const CreateTaskButton = (props) => {
  const handlerNewTaks = () => {
    props.setOpenModal(!props.openModal);
  };

  return (
    <button onClick={handlerNewTaks} className="createTaskButton__button">
      +
    </button>
  );
};

export { CreateTaskButton };
