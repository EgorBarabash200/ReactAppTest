import React, { useState } from "react";
import cl from "./Container.module.css";
import CreatePost from "../create/CreatePost";
import PostList from "../post/PostList";

const Container = () => {
  const [posts, setPosts] = useState([]);
  // Переименовать posts и setPost
  // На listCards и setListCards

  // Переименовать метод createPost на createCard и соответсвенно аргументы 
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  return (
    <div className={cl.mainContainer}>
      <CreatePost create={createPost} />
      {/* Переименовать название пропса posts на listCards */}
      {/* Переименовать posts на cards */}
      <PostList posts={posts} />
    </div>
  );
};

export default Container;
