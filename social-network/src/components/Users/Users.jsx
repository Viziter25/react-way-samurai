import style from "./users.module.css";
import userPhoto from "./../../assets/images/noAvatar.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <span className={style.blockPages}>
        {pages.map((p) => {
          return (
            <div
              className={
                props.currentPage === p
                  ? style.selectedPageActive
                  : style.selectedPage
              }
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </div>
          );
        })}
      </span>
      <div className={style.blockUser}>
        {props.users.map((u) => (
          <div key={u.id} className={style.blockUserItem}>
            <span>
              <div>
                <NavLink to={"./../profile/" + u.id}>
                  <img
                    src={u.photos.small !== null ? u.photos.small : userPhoto}
                    className={style.userPhoto}
                    alt="img"
                  />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    disabled={props.followingInProgress.includes(props.id)}
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    unFollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.includes(props.id)}
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
