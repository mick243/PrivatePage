import { useNavigate } from "react-router-dom";
import { PostState } from "../../types/PostState";
import styled from "styled-components";

interface Props {
  post: PostState;
}
interface ImageProps {
  imageUrl: string;
}

const PostList = ({ post }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${post.post_id}`);
  };

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

  return (
    <PostCard>
      <ImagePlaceholder imageUrl={post.images} />
      <PostContent>
        <Category color={getCategoryColor(post.category_name)}>
          &lt;{post.category_name}
        </Category>
        <Title>{post.title}</Title>
        <Content>{post.content?.slice(0, 100)}</Content>
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
  cursor: pointer;
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
`;

const PostContent = styled.div`
  width: 760px;
  margin-left: -300px;
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
`;

const Title = styled.h2`
  color: white;
  margin-left: 320px;
  font-family: Pretendard;
  font-weight: 700;
  font-size: 28px;
  line-height: 160%;
  letter-spacing: -0.3px;
  cursor: pointer;
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
