import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { TaskContextProvider } from "./context/TaskProvider";
import NotFound from "./pages/NotFound";
import TaskForm from "./pages/TaskForm";
import Taskpage from "./pages/Taskpage";

const App = () => {
  return (
    <div className="bg-zinc-900 h-screen">
      <Navbar />
      <div className="container mx-auto mt-10">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<Taskpage />} />
            <Route path="/new" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
};

export default App;
