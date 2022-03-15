import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}><Link to='/quotes' style={{textDecoration:'none', color: 'white'}}>Great Quotes</Link></div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/quotes' activeClassName={classes.active}>All Quotes</NavLink> 
          </li>
          <li><NavLink to='/new-quote' activeClassName={classes.active}>Add Quotes</NavLink> </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
