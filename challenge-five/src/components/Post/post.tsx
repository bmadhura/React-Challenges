const Post = ({post, editPost, removePost}:any) => {
    return (
        <tr>
            <td>
                {post.id}
                {post.title}
            </td>
            <td>{post.body}</td>
            <td>
                <button onClick={() => editPost(post)}>edit</button>
                <button onClick={() => removePost(post.id)}>delete</button>
            </td>
        </tr>
    )
}

export default Post;