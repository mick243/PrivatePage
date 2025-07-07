import { useNavigate } from "react-router-dom";
import { PostState } from "../../types/PostState";
import { getCategoryColor } from "../styles/CategoryColor";
import styled from "styled-components";
import { media } from "../styles/media";
import { useEffect, useState } from "react";

interface Props {
  post: PostState;
}
interface ImageProps {
  imageUrl: string;
}

const PostList = ({ post }: Props) => {
  const [isMobile, setIsMobile] = useState<boolean>(
    () => window.innerWidth <= 600
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize(); // 초기 설정
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${post.post_id}`);
  };

  return (
    <PostCard>
      <ImagePlaceholder imageUrl={post.images} />
      <PostContent>
        <Category color={getCategoryColor(post.category_name)}>
          &lt;{post.category_name}
        </Category>
        <Title>{post.title}</Title>
        {isMobile ? (
          <Content>{post.content?.slice(0, 25)} ...</Content>
        ) : (
          <Content>{post.content?.slice(0, 40)} ...</Content>
        )}
      </PostContent>
      <Meta>
        <Date>{post.created_at?.slice(0, 10)}</Date>
        <Button onClick={handleClick}></Button>
      </Meta>
    </PostCard>
  );
};

export default PostList;

const PostCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 960px;
  height: 210px;
  margin: 0;
  margin-left: 500px;
  margin-top: 45px;
  margin-bottom: -20px;
  background-color: transparent;
  box-sizing: border-box;

  ${media.phoneM`
      flex-direction: column;
      width:327px;
      height: auto;
      margin-left: 40px;
    `}
`;

const ImagePlaceholder = styled.div<ImageProps>`
  width: 350px;
  height: 210px;
  margin-left: -20px;
  background-color: #121216;
  border-radius: 8px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;

  ${media.phoneM`
      width:327px;
      margin-left: -30px;
    `}
`;

const PostContent = styled.div`
  width: 760px;
  margin-left: -300px;

  ${media.phoneM`
    width: 375px;
    margin-left: 40px;
    margin-left: -300px;
  `}
`;

const Category = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  width: 76px;
  margin-left: 320px;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: -0.3px;
  justify-content: space-between;

  ${media.phoneM`
    margin-left: 160px;
    padding-top: 15px;
  `}
`;

const Title = styled.h2`
  color: white;
  margin-left: 320px;
  font-family: Pretendard;
  font-weight: 700;
  font-size: 28px;
  line-height: 160%;
  letter-spacing: -0.3px;

  ${media.phoneM`
    width:327px;
    margin-left: 160px;
    font-family: Pretendard;
    font-weight: 700;
    font-style: Bold;
    font-size: 20px;
    leading-trim: NONE;
    line-height: 160%;
    letter-spacing: -0.5px;
    `}
`;

const Content = styled.p`
  color: white;
  width: 456px;
  margin-left: 320px;
  margin-top: 8px;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: -0.3px;

  ${media.phoneM`
    width : 275px;
    margin-left: 160px;
  `}
`;

const Meta = styled.div`
  width: 100px;
  margin-left: 20px;
  text-align: right;
`;

const Date = styled.p`
  color: white;
  width: 150px;
  text-align: right;
  margin-left: -70px;
  margin-top: -5px;
  justify-content: space-between;
`;

const Button = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: transparent;
  color: white;
  border: 1px solid white;
  font-size: 20px;
  cursor: pointer;
  margin-left: 40px;
  margin-top: 85px;
  justify-content: space-between;
  background-image: url("/images/Group 1321315055.png");
`;
