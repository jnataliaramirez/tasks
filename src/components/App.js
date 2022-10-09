import React, { useState } from "react";
import { CounterTasks } from "./CounterTasks";
import { CreateTaskButton } from "./CreateTaskButton";
import { ItemTask } from "./ItemTask";
import { ListTasks } from "./ListTasks";
import { SearchTask } from "./SearchTask/index.ts";

const infoTasks = [
  {
    id: 1,
    task: "Hacer el repaso de React básico",
    done: false,
  },
  {
    id: 2,
    task: "Hacer el proyecto de React básico",
    done: false,
  },
  {
    id: 3,
    task: "Repasar y entender nuevos conceptos mientras estudio",
    done: false,
  },
  {
    id: 4,
    task: "Dar estilos al proyecto",
    done: true,
  },
];

const App = () => {
  const [newTask, setNewTask] = useState([...infoTasks]);
  const [searchValue, setSearchValue] = useState("");

  const completedTasks = newTask.filter(
    (completed) => completed.done === true
  ).length;
  const totalTasks = newTask.length;

  const handlerInput = (value) => {
    setSearchValue(value);
  };

  return (
    <>
      <CounterTasks completedTasks={completedTasks} totalTasks={totalTasks} />
      <SearchTask value={searchValue} changeValue={handlerInput} />
      <CreateTaskButton />
      <ListTasks>
        {infoTasks.map((item) => (
          <ItemTask key={item.id} text={item.task} />
        ))}
      </ListTasks>
    </>
  );
};

export { App };
