import { PostState } from "../types/PostState";
import { httpClient } from "./http";

export const getPosts = async (post_id: number) => {
  try {
    const response = await httpClient.get<PostState[]>(`/post`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPostById = async (post_id: number) => {
  const response = await httpClient.get<PostState>(`/post/${post_id}`);
  return response.data;
};
