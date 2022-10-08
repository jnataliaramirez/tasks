import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
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
