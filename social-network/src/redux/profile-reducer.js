import { profileAPI, usersAPI } from "./../components/api/api";
let ADD_POST = "ADD-POST";
let UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let SET_USER_PROFILE = "SET_USER_PROFILE";
let SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: "1", message: "My first post", likecount: "20" },
    { id: "2", message: "My second post", likecount: "100" },
  ],
  newPostText: "it-kamacura",
  profile: null,
  status: "5",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likecount: 0,
      };
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

// thunk
export const getUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
};
export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((data) => {
      if (data.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;