import styled from "styled-components";
import { media } from "../styles/media";
import { useEffect, useState } from "react";
import { httpClient } from "../../apis/http";
import PostList from "./PostList";
import { PostState } from "../../types/PostState";

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [posts, setPosts] = useState<PostState[]>([]);
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

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const fetchPosts = async () => {
    try {
      const response = await httpClient.get(`/post`);
      setPosts(response.data);
    } catch (error) {
      console.error("게시글 로드 실패:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((post) => post.category_name === activeCategory);

  return (
    <WorkStyle>
      <p className="head">&lt; work</p>
      <p className="about-work">
        {isMobile ? (
          <>
            We carry out various development tasks
            <br />
            including front-end, back-end, and full-stack.
            <br />
            Check out our various development tasks!
          </>
        ) : (
          <>
            We carry out various development tasks including front-end,
            back-end, and full-stack
            <br />
            Check out our various development tasks!
          </>
        )}
      </p>
      <div className="button-group">
        {["all", "front-end", "back-end", "full-stack"].map((category) => (
          <button
            key={category}
            className={`${category} ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {filteredPosts.map((post) => (
        <PostList key={post.post_id} post={post} />
      ))}
    </WorkStyle>
  );
};

const WorkStyle = styled.div`
  .head {
    color: #5398ff;
    margin-left: 480px;
    margin-top: 140px;
    font-family: "Pretendard";
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: -0.3px;
  }

  .about-work {
    margin-left: 480px;
    margin-top: 25px;
    font-family: "Pretendard";
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: -0.5px;
  }

  .all {
    width: 64px;
    height: 45px;
    margin-left: 480px;
    margin-top: 80px;
    border-radius: 40px;
    color: #ffffff;
    border: 1px solid #494f60;
    background-color: #010104;
    cursor: pointer;
    font-family: Pretendard;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -0.4px;
    text-align: center;

    &:hover {
      background-color: #ffffff;
      color: #010104;
    }
    &.active {
      background-color: #ffffff;
      color: #010104;
    }
  }
  button {
    width: 97px;
    height: 45px;
    margin-left: 15px;
    border-radius: 40px;
    color: #ffffff;
    border: 1px solid #494f60;
    background-color: #010104;
    cursor: pointer;
    font-family: Pretendard;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -0.4px;
    text-align: center;

    &:hover {
      background-color: #ffffff;
      color: #010104;
    }
    &.active {
      background-color: #ffffff;
      color: #010104;
    }
  }

  p {
    color: #ffffff;
  }

  ${media.phoneM`
    .head {
      color: #5398ff;
      margin-left: 24px;
      margin-top: 20px;
      font-family: "Pretendard";
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;
      letter-spacing: -0.3px;
    }

    .about-work {
      margin: 0 auto;
      padding-left:24px;
      text-align: left;
      font-size: 14px;
    }

    .button-group {
      justify-content: center;
    }
    
    .all {
      margin-left: 24px;
      margin-top: 40px;
      width : 44px;
    }
       
    button {
      width: 85px;
      font-size: 14px;
      height: 40px;
      margin-left: 8px;
      }
    `}

  ${media.tablet`
    `}
`;

export default Work;
