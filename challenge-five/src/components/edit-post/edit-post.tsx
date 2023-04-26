const EditPost = ({selectedPost, editPostSave}:any) =>{

  console.log(selectedPost);
  

    const handleEditPostChange = (key: string, value: string | number | undefined) => {
        const selectedPostClone: any = {...selectedPost};
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

          <button onClick={() => editPostSave(selectedPost)}>edit</button>
        </div>
    )
}

export default EditPost;