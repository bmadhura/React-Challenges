import axios from "axios";

export const getAllPosts = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return response.data;
}

export const updatePost =async (id: number, payload:any) => {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, payload)
    return response.data;
}

export const deletePost =async (id: number) => {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.data;
}