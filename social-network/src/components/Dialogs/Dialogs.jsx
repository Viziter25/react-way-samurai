import s from "./Dialogs.module.css";
import React from "react";
import DialogsItem from "./DialogItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((el) => (
    <DialogsItem avatarka={el.avatarka} name={el.name} key={el.id} />
  ));

  let messageElements = props.message.map((el) => (
    <MessageItem message={el.message} key={el.id} />
  ));
    let newPostElement = React.createRef();

    let onAddMessage = () => {
      props.addMessage();
    };

    let onMessageChange = () => {
      let text = newPostElement.current.value;
      props.updateNewMessage(text);
    };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messageS}>{messageElements}</div>
      <div>
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
      </div>
    </div>
  );
};

export default Dialogs;
