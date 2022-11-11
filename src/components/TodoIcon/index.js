import React from "react";
import { ReactComponent as CheckSVG } from "./_components/Complete/check.svg";
import { ReactComponent as DeleteSVG } from "./_components/Delete/delete.svg";
import "./styles.css";

const iconTypes = {
  check: (color) => (
    <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
  ),
  delete: (color) => (
    <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
  ),
};

function TodoIcon({ type, color = "gray", onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
