import React from "react";
import { CounterTasks } from "../CounterTasks";
import { CreateTaskButton } from "../CreateTaskButton";
import { ItemTask } from "../ItemTask";
import { ListTasks } from "../ListTasks";
import { SearchTask } from "../SearchTask/index.ts";
import { TasksContext } from "../TasksContext";

const AppUI = () => (
  <>
    <CounterTasks />
    <SearchTask />
    <CreateTaskButton />
    <TasksContext.Consumer>
      {/* Destructuración de value */}
      {({ error, loading, searchedTaks, completeTask, deleteTask }) => (
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
      )}
    </TasksContext.Consumer>
  </>
);

export { AppUI };
