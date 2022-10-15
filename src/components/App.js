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
  //* States
  const [tasks, setTasks] = useState(infoTasks);
  const [searchValue, setSearchValue] = useState("");
  console.log("tasks :>> ", tasks);

  //* Handlers
  const handlerInput = (value) => {
    setSearchValue(value);
  };

  //* Counter Tasks Logic
  const completedTasks = tasks.filter(
    (completed) => completed.done === true
  ).length;
  const totalTasks = tasks.length;

  //* SearchTask Logic
  let searchedTaks = [];

  if (searchValue.length < 1) {
    searchedTaks = tasks;
  } else {
    searchedTaks = tasks.filter((task) => {
      const taskText = task.task.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return taskText.includes(searchText);
    });
  }

  //* Check task Logic
  const completeTask = (id) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    const newTasks = [...tasks];
    newTasks[taskIndex].completed = true;
    setTasks(newTasks);
  };

  return (
    <>
      <CounterTasks completedTasks={completedTasks} totalTasks={totalTasks} />
      <SearchTask value={searchValue} changeValue={handlerInput} />
      <CreateTaskButton />
      <ListTasks>
        {searchedTaks.map((item) => (
          <ItemTask key={item.id} text={item.task} completed={item.done} />
        ))}
      </ListTasks>
    </>
  );
};

export { App };
