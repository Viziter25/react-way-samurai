import s from "./Button.module.css";
import React from "react";

const Button = (props) => {
  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  return (
    <div>
      <div>
        <textarea ref={newPostElement} className={s.textarea}></textarea>
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
