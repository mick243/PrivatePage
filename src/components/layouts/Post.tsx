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

  const getCategoryColor = (category: string): string => {
    switch (category) {
      case "front-end":
        return "#FF4ED9";
      case "back-end":
        return "#52FF77";
      case "full-stack":
        return "#25D0FF";
      default:
        return "#ffffff";
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PostWrapper>
        <Category color={getCategoryColor(post.category_name)}>
          &lt;{post.category_name}
        </Category>
        <Date>{post.created_at?.slice(0, 10)}</Date>
        <Title>{post.title}</Title>
        <Content>{post.content}</Content>
        <Image imageUrl={post.images}></Image>
      </PostWrapper>
    </>
  );
};

export default Post;

const PostWrapper = styled.div``;

const Category = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  width: 76px;
  padding-left: 480px;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: -0.3px;
  justify-content: space-between;
`;

const Title = styled.div`
  color: white;
  margin-left: 480px;
  font-family: Pretendard;
  font-weight: 700;
  font-size: 40px;
  line-height: 160%;
  letter-spacing: -0.3px;
`;

const Content = styled.div`
  color: white;
  font-family: Pretendard;
  margin-left: 480px;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: -0.5px;
`;

const Date = styled.p`
  color: white;
  width: 82px;
  height: 26px;
  text-align: right;
  justify-content: space-between;
`;

const Image = styled.div<ImageProps>`
  width: 960px;
  height: 560px;
  margin-left: 480px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
`;
