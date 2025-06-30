import { useEffect, useState } from "react";
import { PostState } from "../../types/PostState";
import { httpClient } from "../../apis/http";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Post = () => {
  const { post_id } = useParams<{ post_id: string }>();
  const [post, setPost] = useState<PostState | null>(null);
  // 게시글 불러오기
  const fetchPost = async () => {
    try {
      const response = await httpClient.get(`/post/${post_id}`);
      setPost(response.data);
    } catch (error) {
      console.error("게시글 로드 실패:", error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [post_id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PostWrapper>
        <Title>{post.title}</Title>
        <Content>{post.content}</Content>
        <Image>{post.images}</Image>
      </PostWrapper>
    </>
  );
};

export default Post;

const PostWrapper = styled.div``;

const Title = styled.div``;

const Content = styled.div``;

const Image = styled.div``;
