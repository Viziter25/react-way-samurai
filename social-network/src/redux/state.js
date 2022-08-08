let ADD_POST = "ADD-POST";
let UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let ADD_MESSAGE = "ADD-MESSAGE";
let UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: "1", message: "My first post", likecount: "20" },
        { id: "2", message: "My second post", likecount: "100" },
      ],
      newPostText: "it-kamacura",
    },
    dialogsPage: {
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
          avatarka:
            "https://vraki.net/sites/default/files/inline/images/1_149.jpg",
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
    },
    sidebar: {
      friend: [
        {
          id: "1",
          name: "dima",
          avatarka:
            "https://img.freepik.com/premium-vector/woman-avatars-with-different-emotions-girl-with-spring-or-summer-flowers-and-a-wreath-in-black-hair_427567-1481.jpg",
        },
        {
          id: "2",
          name: "kola",
          avatarka:
            "https://vraki.net/sites/default/files/inline/images/1_149.jpg",
        },
        {
          id: "3",
          name: "sasha",
          avatarka:
            "https://media2.telemetr.me/file/media-tm/avatars/aed68bfd610e29ecce6a8eda1acf41d6.jpg",
        },
      ],
    },
  },
  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subcribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likecount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
  dispatch2(action) {
    if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 4,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE) {
      this._state.dialogsPage.newMessageText = action.newMessage;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const onMessageChangeActionCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE, newMessage: text };
};

export default store;
