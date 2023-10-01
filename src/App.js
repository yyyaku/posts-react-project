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

  const [title, setTitle] = useState ('')
  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title)
    console.log(bodyInputRef.current.value)
  }

  return (
    <div className="App">
      <form>
        {/* Управляемый компонент */}
        <MyInput
        value={title} 
        type="text" 
        placeholder="Название поста" 
        onChange={e => setTitle(e.target.value)}
        />

        {/* Неуправляемый компонент */}
        <MyInput
        ref={bodyInputRef} 
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
