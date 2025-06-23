import { useNavigate } from "react-router-dom";
import { PostState } from "../../types/PostState";

interface Props {
  post: PostState[];
}

const PostList = ({ post }: Props) => {
  const navigate = useNavigate();

  const handleTitleClick = (post_id: number) => {
    console.log(post_id);
    navigate(`/post/${post_id}`);
  };

  return (
    <>
      {post.map((item) => (
        <p onClick={() => handleTitleClick(item.post_id)} key={item.post_id}>
          {item.title}
          {item.content}
          {item.created_at}
        </p>
      ))}
    </>
  );
};
export default PostList;
