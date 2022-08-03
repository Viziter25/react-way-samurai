import s from "./Button.module.css";
import React from "react";

const Button = (props) => {
  let newPostElement = React.createRef();
  let addMessage = () => {
    let text = newPostElement.current.value;
    props.addMessage(text);
  };

  return (
    <div className={s.buttonBlock}>
      <div>
        <textarea ref={newPostElement} className={s.textarea}></textarea>
      </div>
      <div>
        <button onClick={addMessage} className={s.button}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Button;
