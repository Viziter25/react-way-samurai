let initialState = {
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
      avatarka: "https://vraki.net/sites/default/files/inline/images/1_149.jpg",
    },
    {
      id: "3",
      name: "sasha",
      avatarka:
        "https://media2.telemetr.me/file/media-tm/avatars/aed68bfd610e29ecce6a8eda1acf41d6.jpg",
    },
  ],
};

export const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
