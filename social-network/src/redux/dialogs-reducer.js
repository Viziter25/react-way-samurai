let ADD_MESSAGE = "ADD-MESSAGE";
let UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

let initialState = {
  dialogs: [
    {
      id: "1",
      name: "dima",
      avatarka:
        "https://img.freepik.com/premium-vector/woman-avatars-with-different-emotions-girl-with-spring-or-summer-flowers-and-a-wreath-in-black-hair_427567-1481.jpg",
    },
    {
      id: "2",
      name: "kola",
      avatarka: "https://vraki.net/sites/default/files/inline/images/1_149.jpg",
    },
    {
      id: "3",
      name: "sasha",
      avatarka:
        "https://media2.telemetr.me/file/media-tm/avatars/aed68bfd610e29ecce6a8eda1acf41d6.jpg",
    },
    {
      id: "4",
      name: "ilya",
      avatarka:
        "https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg",
    },
    {
      id: "5",
      name: "valera",
      avatarka:
        "https://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg",
    },
    {
      id: "6",
      name: "kata",
      avatarka:
        "https://www.meme-arsenal.com/memes/e6adac8c2b0d7958ff9fa0964cf49a6d.jpg",
    },
  ],
  messages: [
    { id: "1", message: "hello" },
    { id: "2", message: "by" },
    { id: "3", message: "yoyo" },
  ],
  newMessageText: "hi",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 4,
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE:
      state.newMessageText = action.newMessage;
      return state;
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const onMessageChangeActionCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE, newMessage: text };
};

export default dialogsReducer;
