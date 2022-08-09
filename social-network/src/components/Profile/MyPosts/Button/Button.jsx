import s from "./Button.module.css";
import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "./../../../../redux/profile-reducer";

const Button = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
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
        <button onClick={addPost} className={s.button}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Button;
