import { format } from "date-fns";

import { useTasks } from "../context/TaskProvider";
import { useNavigate } from "react-router-dom";

import { BsCheckLg } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";

const TaskCard = ({ task }) => {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  const formattedDate = format(new Date(task.createdAt), "dd/MM/yyyy");

  return (
    <div className="bg-slate-300 rounded-md p-4">
      <header className="flex justify-between">
        <h2 className="text-xl font-bold uppercase">{task.title}</h2>
        <p>
          {task.done == 1 ? (
            <span className="text-blue-500 font-bold flex items-center gap-2">
              <BsCheckLg /> Completo
            </span>
          ) : (
            <span className="text-red-500 font-bold flex items-center gap-2">
              <MdOutlineClose /> Incompleto
            </span>
          )}
        </p>
      </header>
      <p className="text-sm mt-2 mb-2">{task.description}</p>
      <span className="text-sm">{formattedDate}</span>
      <div className="mt-3 flex justify-center gap-x-1">
        <button
          className="bg-red-500 px-2 py-1 text-white rounded"
          onClick={() => deleteTask(task.id)}
        >
          Eliminar
        </button>
        <button
          className="bg-blue-500 px-2 py-1 text-white rounded"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Actualizar
        </button>

        {task.done == 1 ? (
          <button
            className="bg-orange-500 px-2 py-1 text-white rounded"
            onClick={() => handleDone(task.done)}
          >
            Incompleto
          </button>
        ) : (
          <button
            className="bg-green-500 px-2 py-1 text-white rounded"
            onClick={() => handleDone(task.done)}
          >
            Completar
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
