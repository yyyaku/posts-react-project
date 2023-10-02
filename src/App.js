import React, { useEffect, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./components/hooks/usePost";
import PostService from "./components/API/PostService";
import Loader from "./components/UI/loader/loader";
import { useFetching } from "./components/hooks/useFetching";

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedSearchAndPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostLoading, postError] = useFetching( async () => {
    const posts = await PostService.getAll()
    setPosts(posts)
  })

  useEffect(()=>{
    fetchPosts();
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p=>p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal
      visible={modal}
      setVisible={setModal}
      >
      <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0'}} />
      <PostFilter 
      filter={filter}
      setFilter={setFilter}
      />
      { postError && 
      <h1>Ошибка! ${postError}</h1>
      }
      {
      (isPostLoading) 
      ? <div style={{display: 'flex', justifyContent: 'center', margin: '50px'}}>
        <Loader />
        </div> 
      : <PostList remove={removePost} posts={sortedSearchAndPosts} title="Посты про JS"/>
      }
    </div>
  );
}

export default App;
