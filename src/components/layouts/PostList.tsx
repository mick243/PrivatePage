import { useNavigate } from "react-router-dom";
import { PostState } from "../../types/PostState";
import styled from "styled-components";

interface Props {
  post: PostState;
}

const PostList = ({ post }: Props) => {
  const navigate = useNavigate();

  const handleClick = (post_id: number) => {
    console.log(post_id);
    navigate(`/post/${post_id}`);
  };

  return (
    <PostCard>
      <ImagePlaceholder />
      <PostContent>
        <Category>&lt;{post.category_name}</Category>
        <Title>{post.title}</Title>
        <Description>{post.content?.slice(0, 20)}</Description>
      </PostContent>
      <Meta>
        <Date>{post.created_at?.slice(0, 10)}</Date>
        <Button></Button>
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
  margin-left: 480px;
  margin-top: 45px;
  background-color: transparent;
  padding: 20px;
  box-sizing: border-box;
`;

const ImagePlaceholder = styled.div`
  width: 350px;
  height: 210px;
  background-color: #121216;
  border-radius: 8px;
`;

const PostContent = styled.div`
  flex-grow: 1;
  margin-left: 40px;
`;

const Category = styled.div`
  color: #ff4ed9;
  width: 74px;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: -0.5px;
  justify-content: space-between;
`;

const Title = styled.h2`
  color: white;
  font-family: Pretendard;
  font-weight: 700;
  font-size: 28px;
  line-height: 160%;
  letter-spacing: -0.5px;
  cursor: pointer;
`;

const Description = styled.p`
  color: white;
  margin-top: 8px;
`;

const Meta = styled.div`
  text-align: right;
`;

const Date = styled.p`
  color: white;
  width: 150px;
  text-align: right;
  margin-right: -45px;
  margin-left: 200px;
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
  margin-left: 305px;
  margin-top: 85px;
  justify-content: space-between;
`;
