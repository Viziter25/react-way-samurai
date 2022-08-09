import s from "./Dialogs.module.css";
import DialogsItem from './DialogItem/DialogsItem';
import MessageItem from './MessageItem/MessageItem';
import Button from './ButtonMessage/Button';


const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map((el) => (
    <DialogsItem avatarka={el.avatarka} name={el.name} id={el.id} />
  ));

  let messageElements = props.dialogsPage.messages.map((el) => (
    <MessageItem message={el.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messageS}>{messageElements}</div>
      <div>
        <Button
          dispatch={props.dispatch}
          newMessageText={props.dialogsPage.newMessageText}
        />
      </div>
    </div>
  );
};

export default Dialogs;
