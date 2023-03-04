import { deleteTaskRequest } from "../api/Task.api";

const TaskCard = ({ task }) => {
  const handleDelete = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done == 1 ? "✓" : "❌"}</span>
      <span>{task.createdAt}</span>

      <button onClick={() => handleDelete(task.id)}>Eliminar</button>
      <button>Actualizar</button>
    </div>
  );
};

export default TaskCard;
