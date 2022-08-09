import s from "./Button.module.css";
import React from "react";
import {addMessageActionCreator,onMessageChangeActionCreator} from '../../../redux/dialogs-reducer'

const Button = (props) => {
  let newPostElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(onMessageChangeActionCreator(text));
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
        <button onClick={addMessage} className={s.button}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Button;
