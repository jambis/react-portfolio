import React, { useState, useEffect, createContext, useContext } from "react";
import { firestore } from "../Utils/firebase";
import { collectIdsAndData } from "../Utils/helper";
import { UsersContext } from "./UsersProvider";

export const PostsContext = createContext();

const PostsProvider = ({ children }) => {
  const user = useContext(UsersContext);

  const [posts, setPosts] = useState([]);
  const [drafts, setDrafts] = useState([]);

  let unsubscribePosts = null;
  let unsubscribeDrafts = null;

  const getPosts = () => {
    unsubscribePosts = firestore.collection("posts").onSnapshot((snapshot) => {
      const snapshotPosts = snapshot.docs.map(collectIdsAndData);
      setPosts(snapshotPosts);
    });
  };

  const getDrafts = () => {
    unsubscribeDrafts = firestore
      .collection("drafts")
      .onSnapshot((snapshot) => {
        const snapshotPosts = snapshot.docs.map(collectIdsAndData);
        setDrafts(snapshotPosts);
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
    <PostsContext.Provider value={{ posts, drafts }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
