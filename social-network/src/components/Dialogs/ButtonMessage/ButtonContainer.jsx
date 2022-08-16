import React from "react";
import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from "../../../redux/dialogs-reducer";
import Button from "./Button";

const ButtonContainer = (props) => {

  let state = props.store.getState();

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (text) => {
    let action = onMessageChangeActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Button
      updateNewMessage={onMessageChange}
      addMessage={addMessage}
      newMessageText={state.dialogsPage.newMessageText}
    />
  );
};

export default ButtonContainer;
