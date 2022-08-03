import { rerenderEntireTree } from "../render";
let state = {
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
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likecount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export let addMessage = () => {
  let newMessage = {
    id: 4,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export let updateNewMessage = (newMessage) => {
  state.dialogsPage.newMessageText = newMessage;
  rerenderEntireTree(state);
};

export default state;
