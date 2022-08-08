import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MainImg from './MainImage/MainImg';
import Myposts from "./MyPosts/Myposts";
import s from "./profile.module.css";


const Profile = (props) => {
  return (
    <div className={s.content}>
      <MainImg />
      <ProfileInfo />
      <Myposts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
