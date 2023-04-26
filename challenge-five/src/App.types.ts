export interface IPost {
    id: number;
    body: string;
    title: string;
    // adding a dynamic key to IPost
    [key: string]: any;
  }
  
export type Posts = IPost[];