import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MainImg from "./MainImage/MainImg";
import MypostsContainer from "./MyPosts/MypostsContainer";
import s from "./profile.module.css";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <MainImg />
      <ProfileInfo />
      <MypostsContainer />
    </div>
  );
};

export default Profile;
