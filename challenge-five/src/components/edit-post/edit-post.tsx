const EditPost = ({selectedPost, editPostSave}:any) =>{
    let selectedPostClone:any = [];
  
    const handleEditPostChange = (key: string, value: string | number | undefined) => {
        selectedPostClone = {...selectedPost};
        selectedPostClone[key] = value;
    }

    return(
        <div>
          <div>
            <label>title</label>
            <input 
              type="text" 
              defaultValue={selectedPost?.title} 
              onChange={(e) => handleEditPostChange("title", e.target.value)}
            />
          </div>

          <div>
            <label>body</label>
            <input 
              type="text" 
              defaultValue={selectedPost?.body}
              onChange={(e) => handleEditPostChange("body", e.target.value)}
            />
          </div>

          <button onClick={() => editPostSave(selectedPostClone)}>edit</button>
        </div>
    )
}

export default EditPost;