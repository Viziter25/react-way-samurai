import Button from "./Button/Button";
import s from "./Myposts.module.css";
import Post from "./Post/Post";
import React from "react";

const Myposts = (props) => {
  let postElements = props.posts.map((el) => (
    <Post message={el.message} likecount={el.likecount} />
  ));

  return (
    <div className={s.postsBlock}>
      <h3> My post</h3>
      <div>
        <Button
          addPost={props.addPost}
          newPostText={props.newPostText}
          updateNewPostText={props.updateNewPostText}
        />
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default Myposts;
