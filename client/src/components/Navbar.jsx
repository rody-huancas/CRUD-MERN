import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-zinc-700 flex justify-between items-center px-4 lg:px-24 py-5 text-xl">
        <Link to="/" className="text-indigo-400 font-bold uppercase text-2xl">
          Tasks
        </Link>

        <ul className="flex items-center gap-3 text-indigo-100">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/new">Nueva Tarea</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
