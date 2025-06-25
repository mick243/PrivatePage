import { useEffect, useState } from "react";
import { PostState } from "../../types/PostState";
import Header from "./Header";
import PostList from "./PostList";
import { httpClient } from "../../apis/http";
import styled from "styled-components";

const Post = () => {
  const [posts, setPosts] = useState<PostState[]>([]);

  // 게시글 불러오기
  const fetchPosts = async () => {
    try {
      const response = await httpClient.get("/post");
      setPosts(response.data);
    } catch (error) {
      console.error("게시글 로드 실패:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <PostWrapper>
        {posts.map((post) => (
          <PostList key={post.post_id} post={post} />
        ))}
      </PostWrapper>
    </>
  );
};

export default Post;

const PostWrapper = styled.div``;
