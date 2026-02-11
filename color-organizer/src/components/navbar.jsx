import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/addcolor">
            Add Color
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/editcolor">
            Edit Color
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
