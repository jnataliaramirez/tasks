import React from "react";
import { TodoIcon } from "./";

function DeleteIcon() {
  const onDelete = () => {
    alert("Tarea Eliminada");
  };

  return <TodoIcon type="delete" onClick={onDelete} />;
}

export { DeleteIcon };
