import s from "./header.module.css";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header className={s.header}>
      <img
        src="https://images.wbstatic.net/big/new/6400000/6404679-1.jpg"
        alt="img"
      ></img>
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"./login"}>Login</NavLink>}
      </div>
    </header>
  );
}
export default Header;
