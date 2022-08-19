import s from './Ava.module.css'
import Preloader from './../../../Common/Preloader/Preloadre'

const Ava = (props) => {
  if(!props.profile) {
    return <Preloader />
  }
  return (
    <div className={s.ava}>
      <img src={props.profile.photos.large} alt="img"></img>
    </div>
  );
};


export default Ava;