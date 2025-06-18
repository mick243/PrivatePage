import styled from "styled-components";
import { media } from "../styles/media";

const Work = () => {
  return (
    <WorkStyle>
      <p className="head">&lt; work</p>
      <p className="about-work">
        We carry out various development tasks including front-end, back-end,
        and full-stack
        <br />
        Check out our various development tasks!
      </p>
      <button className="all">all</button>
      <button>front-end</button>
      <button>back-end</button>
      <button>full-stack</button>
      <BoardStyle>
        <p>ㅇㅇㅇㅇ</p>
      </BoardStyle>
      {/* <p className="fe">&lt;front-end</p>
      <p className="be">&lt;back-end</p>
      <p className="fs">&lt;full-stack</p> */}
    </WorkStyle>
  );
};

const WorkStyle = styled.div`
  .head {
    color: #5398ff;
    margin-left: 480px;
    margin-top: 140px;
    font-family: Pretendard;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: -0.5px;
  }

  .about-work {
    margin-left: 480px;
    margin-top: 25px;
    font-family: Pretendard;
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

    &: hover {
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
