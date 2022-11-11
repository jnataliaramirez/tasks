import React, { useState } from "react";

import { AppUI } from "./AppUI";


const App = () => {
  //* Local Storage
  const localStorageTasks = localStorage.getItem("TASKS_V1");
  let parsedTasks;

  if (!localStorageTasks) {
    localStorage.setItem("TASKS_V1", JSON.stringify([]));
    parsedTasks = [];
  } else {
    parsedTasks = JSON.parse(localStorageTasks);
  }

  //* States
  const [tasks, setTasks] = useState(parsedTasks);
  const [searchValue, setSearchValue] = useState("");

  const saveTasks = (newTasks) => {
    const stringifiedTasks = JSON.stringify(newTasks);
    localStorage.setItem("TASKS_V1", stringifiedTasks);
    setTasks(newTasks);
  };

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

    saveTasks(newTasks);
  };

  //* Delete task Logic
  const deleteTask = (id) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    const newTasks = [...tasks];

    newTasks.splice(taskIndex, 1);

    saveTasks(newTasks);
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
