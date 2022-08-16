import s from "./Button.module.css";
import React from "react";

const Button = (props) => {
  let newPostElement = React.createRef();

  let onAddMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newPostElement.current.value;
    props.updateNewMessage(text);
  };

  return (
    <div className={s.buttonBlock}>
      <div>
        <textarea
          onChange={onMessageChange}
          ref={newPostElement}
          className={s.textarea}
          value={props.newMessageText}
        ></textarea>
      </div>
      <div>
        <button onClick={onAddMessage} className={s.button}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Button;
