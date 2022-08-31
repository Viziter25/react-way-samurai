import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MainImg from "./MainImage/MainImg";
import MypostsContainer from "./MyPosts/MypostsContainer";
import s from "./profile.module.css";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <MainImg />
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MypostsContainer />
    </div>
  );
};

export default Profile;
