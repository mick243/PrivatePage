import { PostState } from "../types/PostState";
import { httpClient } from "./http";

export const getPosts = async (postId: number) => {
  try {
    const response = await httpClient.get<PostState[]>(`/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
