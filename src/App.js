import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/Myselect";

function App() {
  const [posts, setPosts] = useState ([
    {id: 1, title: 'ааа', body: 'ддд'},
    {id: 2, title: 'ллл', body: 'ггг'},
    {id: 3, title: 'ввв', body: 'ввв'}
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p=>p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}} />
      <div>
        <MySelect 
        value={selectedSort}
        onChange={sortPosts}
        defaultName="Сортировка"
        options={[
          {value: 'title', name: 'по названию'},
          {value: 'body', name: 'по описанию'},          
        ]}
        />
      </div>
      {posts.length !== 0
      ? 
      <PostList remove={removePost} posts={posts} title="Посты про JS"/>
      : 
      <h1 style={{textAlign:"center"}}>
        Посты не найдены!
      </h1>
      }
    </div>
  );
}

export default App;
