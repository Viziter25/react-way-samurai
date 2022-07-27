import ProfileInfo from "./AvaInfo/ProfileInfo";
import MainImg from './MainImage/MainImg';
import Myposts from "./MyPosts/Myposts";
import s from "./profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <MainImg />
      <ProfileInfo />
      <Myposts />
    </div>
  );
};

export default Profile;
