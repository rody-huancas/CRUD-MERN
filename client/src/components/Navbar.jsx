import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <h1>React MySQL</h1>

        <ul>
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
