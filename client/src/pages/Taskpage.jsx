import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskProvider";

const Taskpage = () => {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0)
      return (
        <h1 className="text-indigo-400 text-4xl font-bold uppercase ">
          No Hay Tareas
        </h1>
      );
    return tasks.map((task) => <TaskCard key={task.id} task={task} />);
  }

  return (
    <>
      <div
        className=" px-5
      "
      >
        <h1 className="text-5xl text-white font-bold text-center">Tareas</h1>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
          {renderMain()}
        </div>
      </div>
    </>
  );
};

export default Taskpage;
