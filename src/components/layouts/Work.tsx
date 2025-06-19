import styled from "styled-components";
import { media } from "../styles/media";
import React, { useEffect, useState } from "react";
import { httpClient } from "../../apis/http";

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await httpClient.get("/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("게시글을 불러오는 중 에러 발생:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <WorkStyle>
      <p className="head">&lt; work</p>
      <p className="about-work">
        We carry out various development tasks including front-end, back-end,
        and full-stack
        <br />
        Check out our various development tasks!
      </p>
      <button
        className={`all ${activeCategory === "all" ? "active" : ""}`}
        onClick={() => handleCategoryClick("all")}
      >
        all
      </button>
      <button
        className={`front-end ${
          activeCategory === "front-end" ? "active" : ""
        }`}
        onClick={() => handleCategoryClick("front-end")}
      >
        front-end
      </button>
      <button
        className={`back-end ${activeCategory === "back-end" ? "active" : ""}`}
        onClick={() => handleCategoryClick("back-end")}
      >
        back-end
      </button>
      <button
        className={`full-stack ${
          activeCategory === "full-stack" ? "active" : ""
        }`}
        onClick={() => handleCategoryClick("full-stack")}
      >
        full-stack
      </button>
      {filteredPosts.map((post) => (
        <BoardStyle key={post.post_id}>
          <img src={post.image} alt={post.title} width="120" height="120" />
          <div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>{post.category}</p>
            <p>{post.date}</p>
          </div>
        </BoardStyle>
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
    letter-spacing: -0.5px;
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
    `}

  ${media.tablet`
    `}
`;
const BoardStyle = styled.div`
  width: 960px;
  height: 210px;
  border: 1px solid;
  margin-left: 480px;
`;

export default Work;
