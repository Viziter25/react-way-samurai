import s from "./Myposts.module.css";
import Post from "./Post/Post";
import React from "react";

const Myposts = (props) => {
  let postElements = props.posts.map((el) => (
    <Post message={el.message} likecount={el.likecount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3> My post</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            className={s.textarea}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost} className={s.button}>
            Send
          </button>
        </div>
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default Myposts;
