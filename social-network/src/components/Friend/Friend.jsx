import s from "./Friend.module.css";
import { NavLink } from "react-router-dom";

const Friend = (props) => {

  let path = "/dialogs/" + props.id;
  return (
      <div className={s.friendItem}>
        <img src={props.avatarka} alt="av"></img>
        <div className={s.blockNavLink}>
          <NavLink className={s.NavLinkName} to={path}>
            {props.name}
          </NavLink>
        </div>
      </div>
  );
};

export default Friend;
