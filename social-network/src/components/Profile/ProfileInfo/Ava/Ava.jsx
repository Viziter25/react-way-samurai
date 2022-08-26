import s from './Ava.module.css'
import Preloader from './../../../Common/Preloader/Preloadre'
import userPhoto from './../../../../assets/images/noAvatar.png'

const Ava = (props) => {
  if(!props.profile) {
    return <Preloader />
  }
  return (
    <div className={s.ava}>
      <img
        src={
          props.profile.photos.large !== null
            ? props.profile.photos.large
            : userPhoto
        }
        alt="img"
      ></img>
    </div>
  );
};

export default Ava;