import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <b>U</b>p<b>Q</b>uote<b>L</b>oad
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/quotes"
              className={navData => {
                return navData.isActive ? classes.active : "";
              }}
            >
              All Quotes
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/new-quote"
              className={navData => (navData.isActive ? classes.active : "")}
            >
              Add a quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
