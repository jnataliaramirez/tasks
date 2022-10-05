import { CounterTasks } from "./CounterTasks";
import { CreateTaskButton } from "./CreateTaskButton";
import { ItemTask } from "./ItemTask";
import { ListTasks } from "./ListTasks";
import { SearchTask } from "./SearchTask";

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
    done: false,
  },
];

const App = () => {
  return (
    <>
      <CounterTasks />
      <SearchTask />
      <CreateTaskButton />
      <ListTasks>
        {infoTasks.map((item) => (
          <ItemTask key={item.id} text={item.task} />
        ))}
      </ListTasks>
    </>
  );
};

export { App };
