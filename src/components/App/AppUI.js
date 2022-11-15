import React from "react";
import { CounterTasks } from "../CounterTasks";
import { CreateTaskButton } from "../CreateTaskButton";
import { ItemTask } from "../ItemTask";
import { ListTasks } from "../ListTasks";
import { SearchTask } from "../SearchTask/index.ts";

const AppUI = (props) => (
  <>
    <CounterTasks
      completedTasks={props.completedTasks}
      totalTasks={props.totalTasks}
    />
    <SearchTask value={props.searchValue} changeValue={props.changeValue} />
    <CreateTaskButton />
    <ListTasks>
      {props.error && <p>Hubo un error</p>}
      {props.loading && <p>Cargando ...</p>}
      {!props.loading && !props.searchedTaks.length && <p>¡Crea tu primera tarea!</p>}
      {props.searchedTaks.map((item) => (
        <ItemTask
          key={item.id}
          text={item.task}
          completed={item.done}
          onComplete={() => props.completeTask(item.id)}
          onDelete={() => props.deleteTask(item.id)}
        />
      ))}
    </ListTasks>
  </>
);

export { AppUI };
