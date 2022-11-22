import React from "react";
import { useContext } from "react";
import { CounterTasks } from "../CounterTasks";
import { CreateTaskButton } from "../CreateTaskButton";
import { ItemTask } from "../ItemTask";
import { ListTasks } from "../ListTasks";
import { SearchTask } from "../SearchTask/index.ts";
import { TasksContext } from "../TasksContext";

const AppUI = () => {
  const { error, loading, searchedTaks, completeTask, deleteTask } =
    useContext(TasksContext);

  return (
    <>
      <CounterTasks />
      <SearchTask />
      <CreateTaskButton />
      <ListTasks>
        {error && <p>Hubo un error</p>}
        {loading && <p>Cargando ...</p>}
        {!loading && !searchedTaks.length && <p>¡Crea tu primera tarea!</p>}
        {searchedTaks.map((item) => (
          <ItemTask
            key={item.id}
            text={item.task}
            completed={item.done}
            onComplete={() => completeTask(item.id)}
            onDelete={() => deleteTask(item.id)}
          />
        ))}
      </ListTasks>
    </>
  );
};

export { AppUI };
