import React from "react";
import { TodoIcon } from "./";

function DeleteIcon(props) {
  return <TodoIcon type="delete" 
  onClick={props.onDelete} />;
}

export { DeleteIcon };
