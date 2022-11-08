import React, { useState } from "react";

import { AppUI } from "./AppUI";

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

    if (newTasks[taskIndex].done) {
      newTasks[taskIndex].done = false;
    } else {
      newTasks[taskIndex].done = true;
    }

    setTasks(newTasks);
  };

  //* Delete task Logic
  const deleteTask = (id) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    const newTasks = [...tasks];

    newTasks.splice(taskIndex, 1);

    setTasks(newTasks);
  };

  return (
    <AppUI 
      completedTasks={completedTasks} 
      totalTasks={totalTasks}
      searchedTaks={searchedTaks}
      searchValue={searchValue} 
      changeValue={handlerInput}
      completeTask={completeTask}
      deleteTask={deleteTask}
    />
  );
};

export { App };
