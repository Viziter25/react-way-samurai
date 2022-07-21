import s from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href="#ss" className={s.item}>
          Profile
        </a>
      </div>
      <div className={s.item}>
        <a href="#ss" className={s.item}>
          Messages
        </a>
      </div>
      <div className={s.item}>
        <a href="#ss" className={s.item}>
          News
        </a>
      </div>
      <div className={s.item}>
        <a href="#ss" className={s.item}>
          Music
        </a>
      </div>
      <div className={s.item}>
        <a href="#ss" className={s.item}>
          Settings
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
