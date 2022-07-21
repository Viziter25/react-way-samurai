import AvaInfo from './AvaInfo/AvaInfo';
import MainImg from './MainImage/MainImg';
import Myposts from "./MyPosts/Myposts";
import s from "./profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <MainImg />
      <AvaInfo />
      <Myposts />
    </div>
  );
};

export default Profile;
