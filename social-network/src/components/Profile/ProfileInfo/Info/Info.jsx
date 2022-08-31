import s from "./Info.module.css";
import Preloader from "./../../../Common/Preloader/Preloadre";
import ProfileStatus from './ProfileStatus';

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
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
    );
};

export default Info;