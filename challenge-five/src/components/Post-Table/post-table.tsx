import Post from "../Post/post";
import styles from "./post-table.module.scss";

const PostTable = ({postsToDisplay, editPost, removePost}:any) => {    
    return(
        <div className={styles.TableContainer}>
        <table className={styles.Table}>
          <thead>
            <tr>
              <th>title</th>
              <th>body</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {
              postsToDisplay.map((post:any) => {
                
                return (
                  <Post post={post} editPost={editPost} removePost={removePost}/>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
}

export default PostTable;