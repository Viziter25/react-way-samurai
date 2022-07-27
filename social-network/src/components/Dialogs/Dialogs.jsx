import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const MessageItem = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = () => {
  let dialogs = [
    { id: "1", name: "dima" },
    { id: "2", name: "kola" },
    { id: "3", name: "sasha" },
    { id: "4", name: "ilya" },
    { id: "5", name: "valera" },
    { id: "6", name: "kata" },
  ];

  let messages = [
    { id: "1", message: "hello" },
    { id: "2", message: "by" },
    { id: "3", message: "yo" },
  ];

  let dialogsElements = dialogs.map((el) => (
    <DialogsItem name={el.name} id={el.id} />
  ));

  let messageElements = messages.map((el) => (
    <MessageItem message={el.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messageS}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
