import React from "react";
import { useContext } from "react";
import { TasksContext } from "../TasksContext";
import "./styles.css";

const CounterTasks = () => {
  const { completedTasks, totalTasks } = useContext(TasksContext);

  return (
    <>
      <h1 className="counterTasks__title"> Este es tu gestor de tareas :) </h1>
      <h3 className="counterTasks__title">
        Haz realizado {completedTasks} tareas de {totalTasks}
      </h3>
    </>
  );
};

export { CounterTasks };
