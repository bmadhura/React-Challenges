import { useEffect, useState } from "react";
import EditModal from "./components/EditModal/EditModal";
import "./App.module.scss"
import { getData } from "./services/post.service";

const App = () => {
  const [posts, setPosts] = useState<any>([]);
  const [editPostId, setEditPostId] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  const handleRowsPerPageChange = (event: any) => {
    setRowsPerPage(event.target.value);
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const subsetOfData = posts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(posts.length / rowsPerPage);


  const getDataFromService = async () => {
    const posts = await getData();
    setPosts(posts);
    setLoading(false);
  }

  useEffect(() => {
    getDataFromService()
  }, []);

  const handleEditClick = (postId: any) => {
    setEditPostId(postId);
  };

  const handleSaveClick = (postId: any, title: any, body: any) => {
    // Call API to update post
    setEditPostId(null);
    setPosts(posts.map((post: any) => post.id === postId ? { ...post, title, body } : post));
  };

  const handleCancelClick = () => {
    setEditPostId(null);
  };

  const handleDeleteClick = (postId: any) => {
    // Call API to delete post
    setPosts(posts.filter((post: any) => post.id !== postId));
  };

  return (
    <div>
      {
        loading ? <div><img src="./assets/loader.gif" alt="Loading..." /></div> :
          <div>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Body</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {subsetOfData.map((post: any) => (
                  <tr key={post.id}>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                    <td>
                      <button onClick={() => handleEditClick(post.id)}>Edit</button>
                    </td>
                    <td>
                      <button onClick={() => handleDeleteClick(post.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
              {editPostId !== null &&
                <EditModal
                  postId={editPostId}
                  postTitle={posts.find((post: any) => post.id === editPostId).title}
                  postBody={posts.find((post: any) => post.id === editPostId).body}
                  onSave={handleSaveClick}
                  onCancel={handleCancelClick}
                />
              }
            </table>
            <div>
              <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
                <option value="5">5 rows per page</option>
                <option value="10">10 rows per page</option>
                <option value="20">20 rows per page</option>
                <option value="50">50 rows per page</option>
              </select>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  disabled={currentPage === i + 1}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
      }
    </div>
  );
};

export default App;