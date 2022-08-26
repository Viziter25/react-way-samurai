import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from "./../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    message: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs,
    newMessageText: state.dialogsPage.newMessageText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessage: (text) => {
      let action = onMessageChangeActionCreator(text);
      dispatch(action);
    },
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
  };
};


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs);
