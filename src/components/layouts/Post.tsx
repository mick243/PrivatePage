import React, { useEffect, useState } from "react";
import { PostState } from "../../types/PostState";
import { getCategoryColor } from "../styles/CategoryColor";
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

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PostWrapper>
        <HeaderRow>
          <Category color={getCategoryColor(post.category_name)}>
            &lt;{post.category_name}
          </Category>
          <Date>{post.created_at?.slice(0, 10)}</Date>
        </HeaderRow>
        <Title>{post.title}</Title>
        <Image imageUrl={post.images}></Image>
        <Content>
          {post.content.split("<br>").map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
          <SubTitle>{post.sub_title}</SubTitle>
        </Content>
      </PostWrapper>
    </>
  );
};

export default Post;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const HeaderRow = styled.div`
  display: flex;
  width: 960px;
  padding-top: 100px;
  padding-left: 480px;
  align-items: center;
  column-gap: 15px;
`;

const Category = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  width: 76px;
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
  width: 960px;
  margin-left: 480px;
  padding-top: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: -0.5px;
  white-space: pre-wrap;
  word-break: break-word;
`;

const SubTitle = styled.div`
  color: white;
  font-family: Pretendard;
  width: 960px;
  padding-top: 20px;
  font-size: 27px;
  font-weight: 1000;
  line-height: 160%;
  letter-spacing: -0.5px;
`;

const Date = styled.p`
  color: white;
  width: 82px;
  height: 26px;
  margin-left: auto;
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
