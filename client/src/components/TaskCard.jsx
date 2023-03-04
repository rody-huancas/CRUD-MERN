import { useTasks } from "../context/TaskProvider";
import { useNavigate } from "react-router-dom";

const TaskCard = ({ task }) => {
  const { deleteTask } = useTasks();
  const navigate = useNavigate();

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done == 1 ? "✓" : "❌"}</span>
      <span>{task.createdAt}</span>

      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
      <button onClick={() => navigate(`/edit/${task.id}`)}>Actualizar</button>
    </div>
  );
};

export default TaskCard;
