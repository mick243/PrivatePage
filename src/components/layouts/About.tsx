import styled from "styled-components";
import { media } from "../styles/media";

const About = () => {
  return (
    <AboutStyle>
      <p className="head">&lt; about</p>
      <p className="introduction">
        Hello!
        <br />
        Welcome to the Full Stack Developer Studio.
      </p>
      <p className="introduction-1">
        This is a space to create and store new records of life as a developer.
        <br />
        The beginning of a new class, featuring the lives of various developers.
      </p>
      <p className="introduction-2">
        안녕하세요.
        <br />
        풀스택 개발자 강정민의 스튜디오입니다.
      </p>
      <p className="skill">&lt; skills</p>
      <p className="logo">
        <img
          className="js-logo"
          src="/logos/478d85330087acd75c9ffa664f61071c-ezgif.com-resize.png"
        />
      </p>
      <footer className="footer">
        <p>Data has been created since 2025.</p>
      </footer>
    </AboutStyle>
  );
};

const AboutStyle = styled.div`
  width: 1920px;

  p {
    color: #ffffff;
  }

  .head {
    color: #5398ff;
    text-align: center;
    margin-top: 140px;
    font-family: Pretendard;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: -0.5px;
  }

  .introduction {
    text-align: center;
    margin-top: 45px;
    font-family: Pretendard;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: -0.5px;
  }

  .introduction-1 {
    text-align: center;
    margin-top: 25px;
    font-family: Pretendard;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: -0.5px;
  }

  .introduction-2 {
    text-align: center;
    margin-top: 90px;
    font-family: Pretendard;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: -0.5px;
  }

  .skill {
    text-align: center;
    margin-top: 170px;
    font-family: Pretendard;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: -0.5px;
  }

  .footer {
    text-align: center;
    margin-top: 265px;
    font-family: Pretendard;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: -0.5px;
  }

  .logo {
    min-width: 480px;
    min-height: 90px;
    height: 90px;
    margin-left: 760px;
    margin-top: 35px;
  }

  .react-logo {
    margin-left: auto;
    padding-left: 47px;
    justify-content: space-between;
  }

  ${media.phoneM`
    `}

  ${media.tablet`
    `}
`;

export default About;
