import { useEffect, useState } from "react";
import { getTaskRequest } from "../api/Task.api";

import TaskCard from "../components/TaskCard";

const Taskpage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const response = await getTaskRequest();
      setTasks(response.data);
    }
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
