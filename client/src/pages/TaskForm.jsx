import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const TaskForm = () => {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <>
      <div>
        <h1>{params.id ? "Editar Tarea" : "Nueva Tarea"}</h1>

        <Formik
          initialValues={task}
          enableReinitialize={true}
          onSubmit={async (values, actions) => {
            if (params.id) {
              await updateTask(params.id, values);
            } else {
              await createTask(values);
            }
            navigate("/");
            setTask({
              title: "",
              description: "",
            });
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <label>Título</label>
              <input
                type="text"
                name="title"
                placeholder="Ingresa el título"
                onChange={handleChange}
                value={values.title}
              />

              <label>Descripcion</label>
              <textarea
                name="description"
                rows="3"
                placeholder="Ingresa la descripción"
                onChange={handleChange}
                value={values.description}
              ></textarea>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Guardando" : "Guardar"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default TaskForm;
