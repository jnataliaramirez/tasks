import React, { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import { AppUI } from "./AppUI";

const App = () => {
  //* Hooks
  // Desestructuración de los datos del hook useEffect
  const {
    item: tasks,
    saveItem: saveTasks,
    loading,
    error,
  } = useLocalStorage("TASKS_V1", []);

  //* States
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
      loading={loading}
      error={error}
    />
  );
};

export { App };
