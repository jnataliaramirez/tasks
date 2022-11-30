import React from "react";
import { TodoIcon } from "../..";

function CompleteIcon({ onComplete, completed }) {

  const handlerComplete = () => {
    onComplete(!completed)
  }


  return (
    <TodoIcon
      type="check"
      color={completed ? "#4caf50" : "gray"}
      onClick={handlerComplete}
    />
  );
}

export { CompleteIcon };
