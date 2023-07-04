import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1>Pichichus SRL</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="/category/1"> Alimentos </NavLink>
          </li>
          <li>
            <NavLink to="/category/2"> Snacks </NavLink>
          </li>
          <li>
            <NavLink to="/category/3"> Accesorios </NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
