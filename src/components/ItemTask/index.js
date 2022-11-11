import React from "react";
import { CompleteIcon } from "../TodoIcon/_components/Complete/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/_components/Delete/DeleteIcon";
import "./styles.css";

const ItemTask = (props) => {
  return (
    <li className="itemTasks__list">
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
      <p
        className={`itemTasks__paragraph ${
          props.completed && "itemTasks__paragraph--completed"
        }`}
      >
        {props.text}
      </p>
      <DeleteIcon onDelete={props.onDelete} />
    </li>
  );
};

export { ItemTask };
