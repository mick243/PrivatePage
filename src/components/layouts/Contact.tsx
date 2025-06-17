import styled from "styled-components";
import { FaGithubSquare } from "react-icons/fa";
import Footer2 from "./Footer2";

const Contact = () => {
  const newPageGithub = () => {
    window.open("https://github.com/mick243");
  };
  console.log(FaGithubSquare);
  return (
    <ContactStyle>
      <p className="head">&lt; contact</p>
      <p className="head-word">
        Hello! <br />
        Welcome to the Full Stack Developer Studio
      </p>
      <hr className="bar"></hr>
      <p className="adress">블로그 주소</p>
      <p className="adress">깃허브 주소</p>
      <hr className="bar"></hr>
      <Footer2></Footer2>
    </ContactStyle>
  );
};

const ContactStyle = styled.div`
  min-width: 1920px;
  margin: 0 auto;
  padding: 0 20px;

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
  .head-word {
    margin-left: 480px;
    color: #ffffff;
  }

  .adress {
    margin-left: 480px;
    color: #ffffff;
    text-align: left;
  }

  .bar {
    width: 960px;
    margin-left: 480px;
    margin-top: 25px;
    color: #ffffff;
  }
`;

export default Contact;
