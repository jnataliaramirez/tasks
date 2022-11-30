import React, { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const TasksContext = React.createContext();

const TasksProvider = (props) => {
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
  // State for modal
  const [openModal, setOpenModal] = useState(false);

  //* Counter Tasks Logic
  const completedTasks = tasks.filter(
    (completed) => completed.done === true
  ).length;
  const totalTasks = tasks.length;

  //* SearchTask Logic
  let searchedTasks = [];

  if (searchValue.length <= 1) {
    searchedTasks = tasks;
  } else {
    searchedTasks = tasks.filter((task) => {
      const taskText = task.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return taskText.includes(searchText);
    });
  }

  //* Check task Logic
  const addTask = (text) => {
    const newTasks = [...tasks];
    newTasks.push({
      done: false,
      text: text,
    });
    saveTasks(newTasks);
  };

  const completeTask = (text) => {
    const taskIndex = tasks.findIndex((task) => task.text === text);
    const newTasks = [...tasks];

    if (!newTasks[taskIndex].done) {
      newTasks[taskIndex].done = true;
    } else {
      newTasks[taskIndex].done = false;
    }

    saveTasks(newTasks);
  };

  //* Delete task Logic
  const deleteTask = (text) => {
    const taskIndex = tasks.findIndex((task) => task.text === text);
    const newTasks = [...tasks];

    newTasks.splice(taskIndex, 1);

    saveTasks(newTasks);
  };

  return (
    <TasksContext.Provider
      value={{
        completedTasks,
        totalTasks,
        searchedTasks,
        searchValue,
        setSearchValue,
        completeTask,
        deleteTask,
        loading,
        error,
        openModal,
        setOpenModal,
        addTask,
      }}
    >
      {props.children}
    </TasksContext.Provider>
  );
};

export { TasksContext, TasksProvider };
