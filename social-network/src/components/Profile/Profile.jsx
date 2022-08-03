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
        addPost={props.addPost}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
