import { Dispatch } from 'react';
import { IPost } from './App.types';
import { deletePost, getAllPosts, updatePost } from './services/posts.service';

export interface Istate {
    posts: IPost[],
    isLoading: boolean,
    pageNumber: number,
    pageSize: number,
    showEditModal: boolean,
    selectedPost: IPost | null,
}

export interface Iaction {
    type: string;
    data?: any
}

export const initialState: Istate = {
    posts: [],
    isLoading: true,
    pageNumber: 0,
    pageSize: 10,
    showEditModal: false,
    selectedPost: null,
}

export const ACTIONS = {
    GET_POSTS: "GET_POSTS",
    SHOW_EDIT: "SHOW_EDIT",
    EDIT_POST: "EDIT",
    DELETE_POST: "DELETE",
    PAGINATION: "PAGINATION"
}

export const AppReducer = (state: Istate, action: Iaction): Istate => {
    switch (action.type) {
        case "GET_POSTS":
            return { ...state, isLoading: false, posts: action.data}
        case "SHOW_EDIT":
            return { ...state, showEditModal: true, selectedPost: action.data }
        case "DELETE":
            return { ...state, posts: action.data }
        case "EDIT":
            return { ...state, showEditModal: false, posts: action.data }
        case "CHANGE_PAGE_NUMBER":
            return { ...state, pageNumber: action.data }
        case "CHANGE_PAGE_SIZE":
            return { ...state, pageSize: action.data }
        default:
            return state;
    }
}

export const getData = async (dispatch: Dispatch<Iaction>) => {
    const data = await getAllPosts();
    dispatch({ type: "GET_POSTS", data });
}

export const editThePost = (post: any, state: any, dispatch: Dispatch<Iaction>) => {
    updatePost(post.id, { title: post.title, body: post.body });
    state.posts = state.posts.filter((item: any) => {
        if (item.id === post.id) {
            Object.assign(item, post);
        }
        return item;
    })
    dispatch({ type: "EDIT", data: state.posts })
}

export const deleteThePost = (id: number, dispatch: Dispatch<Iaction>, state: Istate) => {
    deletePost(id);
    state.posts = state.posts.filter((post: any) => post.id != id);
    dispatch({ type: "DELETE", data: state.posts });
}

export const changePageNumber = (offset: number, state: Istate, dispatch: Dispatch<Iaction>) => {
    const newPageNumber = state.pageNumber + offset;
    const maxPageNumber = state.posts.length / state.pageSize;
    if (newPageNumber < 0 || newPageNumber > maxPageNumber) return;
    dispatch({ type: "CHANGE_PAGE_NUMBER", data: newPageNumber });
}

export const changePageSize = (pageSize: number, dispatch: Dispatch<Iaction>) => {
    dispatch({ type: "CHANGE_PAGE_SIZE", data: pageSize })
}