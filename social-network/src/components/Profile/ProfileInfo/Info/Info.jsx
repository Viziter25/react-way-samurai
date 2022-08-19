import s from "./Info.module.css";
import Preloader from "./../../../Common/Preloader/Preloadre";

const Info = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
 
    return (
      <div className={s.descriptionBlock}>
        <div>{props.profile.fullName}</div>
        <div>{props.profile.aboutMe}</div>
        <div>Contacts:</div>
        <a href={props.profile.contacts.facebook}>
          {props.profile.contacts.facebook}
        </a>
      </div>
    );
};

export default Info;