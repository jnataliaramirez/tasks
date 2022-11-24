import React from "react";
import { useContext } from "react";
import { CounterTasks } from "../CounterTasks";
import { CreateTaskButton } from "../CreateTaskButton";
import { ItemTask } from "../ItemTask";
import { ListTasks } from "../ListTasks";
import { Modal } from "../Modal";
import { SearchTask } from "../SearchTask";
import { TaskForm } from "../TaskForm";
import { TasksContext } from "../TasksContext";

const AppUI = () => {
  const {
    error,
    loading,
    searchedTasks,
    completeTask,
    deleteTask,
    openModal,
    setOpenModal,
  } = useContext(TasksContext);

  return (
    <>
      <CounterTasks />
      <SearchTask />
      <ListTasks>
        {error && <p>Hubo un error</p>}
        {loading && <p>Cargando ...</p>}
        {!loading && !searchedTasks.length && <p>¡Crea tu primera tarea!</p>}
        {searchedTasks.map((item) => (
          <ItemTask
            key={item.text}
            text={item.text}
            completed={item.done}
            onComplete={() => completeTask(item.id)}
            onDelete={() => deleteTask(item.id)}
          />
        ))}
      </ListTasks>

      {openModal && (
        <Modal>
          <TaskForm />
        </Modal>
      )}

      <CreateTaskButton setOpenModal={setOpenModal} />
    </>
  );
};

export { AppUI };
