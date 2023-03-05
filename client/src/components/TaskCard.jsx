import { useTasks } from "../context/TaskProvider";
import { useNavigate } from "react-router-dom";

const TaskCard = ({ task }) => {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done == 1 ? "✓" : "❌"}</span>
      <span>{task.createdAt}</span>

      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
      <button onClick={() => navigate(`/edit/${task.id}`)}>Actualizar</button>
      <button onClick={() => handleDone(task.done)}>Completar Tarea</button>
    </div>
  );
};

export default TaskCard;
