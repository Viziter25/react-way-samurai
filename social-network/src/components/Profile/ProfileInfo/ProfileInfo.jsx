import Ava from "./Ava/Ava";
import Info from "./Info/Info";
import s from "./Ava_info.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={s.ava_info}>
      <Ava profile={props.profile} />
      <Info
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </div>
  );
};

export default ProfileInfo;
