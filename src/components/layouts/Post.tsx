import { useEffect, useState } from "react";
import { PostState } from "../../types/PostState";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getPostById } from "../../apis/Posts";

interface ImageProps {
  imageUrl: string;
}

const Post = () => {
  const { post_id } = useParams<{ post_id: string }>();
  const [post, setPost] = useState<PostState>();
  // 게시글 불러오기
  useEffect(() => {
    if (post_id) {
      const fetchData = async () => {
        try {
          const data = await getPostById(Number(post_id));
          setPost(data);
        } catch (error) {
          console.error("게시글 로드 실패:", error);
        }
      };
      fetchData();
    }
  }, [post_id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PostWrapper>
        <Title>{post.title}</Title>
        <Content>{post.content}</Content>
        <Image imageUrl={post.images}></Image>
      </PostWrapper>
    </>
  );
};

export default Post;

const PostWrapper = styled.div``;

const Title = styled.div``;

const Content = styled.div``;

const Image = styled.div<ImageProps>`
  width: 960px;
  height: 640px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
`;
