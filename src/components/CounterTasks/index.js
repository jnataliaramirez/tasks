import React from "react";
import "./styles.css";

const CounterTasks = (props) => {
  return (
    <>
      <h1 className="counterTasks__title"> Este es tu gestor de tareas :) </h1>
      <h3 className="counterTasks__title">
        Haz realizado {props.completedTasks} tareas de {props.totalTasks}
      </h3>
    </>
  );
};

export { CounterTasks };
