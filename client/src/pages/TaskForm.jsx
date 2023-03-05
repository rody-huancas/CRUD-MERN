import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const TaskForm = () => {
  const { createTask, getTask, updateTask } = useTasks();
  const [formError, setFormError] = useState(null);

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
      <div className="px-4">
        <h1 className="text-indigo-600 uppercase text-2xl text-center font-bold mb-10">
          {params.id ? "Editar Tarea" : "Nueva Tarea"}
        </h1>

        <Formik
          initialValues={task}
          enableReinitialize={true}
          onSubmit={async (values, actions) => {
            if (!values.title || !values.description) {
              setFormError("Por favor completa todos los campos");
              setTimeout(() => {
                setFormError(null);
              }, 4000);
            } else {
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
              setFormError(null);
            }
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form
              className="lg:w-1/2  mx-auto bg-slate-200 flex flex-col gap-2 p-5 rounded-xl"
              onSubmit={handleSubmit}
            >
              {formError !== null && (
                <div className="bg-red-500 text-white text-center px-4 py-3 rounded-lg font-semibold">
                  {formError}
                </div>
              )}

              <label className="font-bold text-lg text-indigo-700 uppercase">
                Título
              </label>
              <input
                type="text"
                name="title"
                className="text-lg px-3 py-2 rounded-lg text-slate-800"
                placeholder="Ingresa el título"
                onChange={handleChange}
                value={values.title}
              />

              <label className="font-bold text-lg text-indigo-700 uppercase">
                Descripcion
              </label>
              <textarea
                name="description"
                rows="3"
                className="text-lg px-3 py-2 rounded-lg text-slate-800"
                placeholder="Ingresa la descripción"
                onChange={handleChange}
                value={values.description}
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-1/3 mx-auto mt-3 bg-indigo-700 text-white uppercase px-4 py-2 cursor-pointer rounded-lg  hover:bg-indigo-600"
              >
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
