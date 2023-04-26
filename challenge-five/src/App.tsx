import styles from './App.module.scss';
import { useEffect, useReducer } from 'react';
import { AppReducer, initialState, Iaction, Istate, getData, deleteThePost, editThePost, changePageNumber, changePageSize } from './App.state';
// import { deletePost, getAllPosts, updatePost } from './services/posts.service';
import PostTable from './components/Post-Table/post-table';
import Paginator from './components/Paginator/paginator';
import EditPost from './components/edit-post/edit-post';

const App = () => {

  const [ state, dispatch ] = useReducer(AppReducer, initialState);
  let postsToDisplay = [];

  useEffect(() => {
    getData(dispatch);
  }, []);

  const handleEditModal = (post:any) => {
    dispatch({type: "SHOW_EDIT", data:post});
  }
  
  const handleRemovePost = (id:number) => {
    deleteThePost(id, dispatch, state);
  }

  const editPostHandle = (post:any) =>{
    editThePost(post, state, dispatch);
  }

  const handlePageNumber = (offset: number) => {
    changePageNumber(offset, state, dispatch);
  }

  const handlePageSize = (pageNumber:number) =>{
    changePageSize(pageNumber, dispatch)
  }

  postsToDisplay = state.posts.slice(0,state.pageSize);

  return (
    <main className={styles.App}>
      {
        state.showEditModal ? 
        <EditPost selectedPost={state.selectedPost} editPostSave={editPostHandle}/> : null
      }

      {
        state.isLoading ? <div className={styles.SpinnerContainer}>
          <div className={styles.Spinner}></div>
        </div> : 
        <PostTable postsToDisplay={postsToDisplay} removePost={handleRemovePost} editPost={handleEditModal}/>
      }

      <Paginator handlePageSize={handlePageSize} handlePageNumber={handlePageNumber}/>
    </main>
  );
}

export default App;