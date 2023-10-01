import React, { useRef, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState ([
    {id: 1, title: 'JS', body: 'descrip'},
    {id: 2, title: 'JS 2', body: 'descrip'},
    {id: 3, title: 'JS 3', body: 'descrip'}
  ])

  const [post, setPost] = useState ({title: '', body: ''})

  const addNewPost = (e) => {
    e.preventDefault()

    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})
  }

  return (
    <div className="App">
      <form>
        {/* Управляемый компонент */}
        <MyInput
        value={post.title} 
        onChange={e => setPost({...post, title: e.target.value})}
        type="text" 
        placeholder="Название поста" 
        />

        {/* Неуправляемый компонент */}
        <MyInput
        value={post.body} 
        onChange={e => setPost({...post, body: e.target.value})}
        type="text" 
        placeholder="Описание поста" 
        />
        <MyButton onClick = {addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про JS"/>
    </div>
  );
}

export default App;
