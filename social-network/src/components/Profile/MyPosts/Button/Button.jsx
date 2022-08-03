import s from "./Button.module.css";
import React from "react";

const Button = (props) => {
  let newPostElement = React.createRef();
  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} className={s.textarea} value={props.newPostText}/>
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
