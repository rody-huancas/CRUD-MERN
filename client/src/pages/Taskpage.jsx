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

  return (
    <>
      <div>
        <h1>Tareas</h1>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </>
  );
};

export default Taskpage;
