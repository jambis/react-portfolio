import React, { useEffect, createContext, useContext, useReducer } from "react";
import { firestore } from "../Utils/firebase";
import {
  collectIdsAndDataPosts,
  collectIdsAndDataDrafts,
} from "../Utils/helper";
import { UsersContext } from "./UsersProvider";
import { PostsReducer } from "./PostsReducer";

export const PostsContextState = createContext();
export const PostsContextDispatch = createContext();

const PostsProvider = ({ children }) => {
  const user = useContext(UsersContext);
  const [state, dispatch] = useReducer(PostsReducer, { posts: [], drafts: [] });

  let unsubscribePosts = null;
  let unsubscribeDrafts = null;

  const getPosts = () => {
    unsubscribePosts = firestore.collection("posts").onSnapshot((snapshot) => {
      const snapshotPosts = snapshot.docs.map(collectIdsAndDataPosts);
      dispatch({ type: "REFRESH_POSTS", payload: snapshotPosts });
    });
  };

  const getDrafts = () => {
    unsubscribeDrafts = firestore
      .collection("drafts")
      .onSnapshot((snapshot) => {
        const snapshotPosts = snapshot.docs.map(collectIdsAndDataDrafts);
        dispatch({ type: "REFRESH_DRAFTS", payload: snapshotPosts });
      });
  };

  useEffect(() => {
    getPosts();

    return () => unsubscribePosts();
  }, []);

  useEffect(() => {
    if (user) {
      getDrafts();
    }

    return () => {
      if (user) {
        unsubscribeDrafts();
      }
    };
  }, [user]);

  return (
    <PostsContextState.Provider value={state}>
      <PostsContextDispatch.Provider value={dispatch}>
        {children}
      </PostsContextDispatch.Provider>
    </PostsContextState.Provider>
  );
};

export default PostsProvider;
