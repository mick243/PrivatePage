import { useEffect, useState } from "react";
import { PostState } from "../../types/PostState";
import Header from "./Header";
import PostList from "./PostList";
import { httpClient } from "../../apis/http";
import styled from "styled-components";

interface Props {
  post: PostState;
}

const Post = ({ post }: Props) => {
  const [posts, setPosts] = useState<PostState[]>([]);
  // 게시글 불러오기
  const fetchPosts = async (post_id: number) => {
    try {
      const response = await httpClient.get(`/post/${post_id}`);
      setPosts(response.data);
    } catch (error) {
      console.error("게시글 로드 실패:", error);
    }
  };

  return (
    <>
      <PostWrapper>
        <Title>{post.title}</Title>
        <Content>{post.content}</Content>
      </PostWrapper>
    </>
  );
};

export default Post;

const PostWrapper = styled.div``;

const Title = styled.div``;

const Content = styled.div``;
