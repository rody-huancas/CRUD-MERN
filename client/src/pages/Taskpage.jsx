import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskProvider";

const Taskpage = () => {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1>No Hay Tareas</h1>;
    return tasks.map((task) => <TaskCard key={task.id} task={task} />);
  }

  return (
    <>
      <div>
        <h1>Tareas</h1>
        {renderMain()}
      </div>
    </>
  );
};

export default Taskpage;
