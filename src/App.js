import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState ([
    {id: 1, title: 'JS', body: 'descrip'},
    {id: 2, title: 'JS 2', body: 'descrip'},
    {id: 3, title: 'JS 3', body: 'descrip'}
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p=>p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList remove={removePost} posts={posts} title="Посты про JS"/>
    </div>
  );
}

export default App;
