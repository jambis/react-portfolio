export const PostsReducer = (state, action) => {
  switch (action.type) {
    case "REFRESH_POSTS":
      return { ...state, posts: action.payload };
    case "REFRESH_DRAFTS":
      return { ...state, drafts: action.payload };
    case "TOGGLE_POST":
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload) {
            return { ...post, checked: !post.checked };
          } else {
            return post;
          }
        }),
      };
    case "TOGGLE_DRAFT":
      return {
        ...state,
        drafts: state.drafts.map((post) => {
          if (post.id === action.payload) {
            return { ...post, checked: !post.checked };
          } else {
            return post;
          }
        }),
      };
    case "PUBLISH_DRAFT":
      break;
    case "EDIT_POST":
      break;
    case "EDIT_DRAFT":
      break;
    default:
      return state;
  }
};
