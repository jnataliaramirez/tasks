import React from "react";
import { TasksProvider } from "../TasksContext";
import { AppUI } from "./AppUI";

const App = () => {
  return (
    <TasksProvider>
      <AppUI />
    </TasksProvider>
  );
};

export { App };
