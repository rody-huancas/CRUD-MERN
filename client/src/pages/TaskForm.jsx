import { Form, Formik } from "formik";
import { createTaskRequest } from "../api/Task.api";

const TaskForm = () => {
  return (
    <>
      <div>
        <Formik
          initialValues={{
            title: "",
            description: "",
          }}
          onSubmit={async (values, acions) => {
            console.log(values);
            try {
              const response = await createTaskRequest(values);
              console.log(response);
              acions.resetForm();
            } catch (error) {
              console.log(error);
            }
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
