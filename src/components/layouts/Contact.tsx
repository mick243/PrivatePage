import styled from "styled-components";
import { FaGithubSquare } from "react-icons/fa";
import Footer2 from "./Footer2";
import { media } from "../styles/media";

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
      <p className="adress">kjm3746@gmail.com</p>
      <p className="adress">
        https://github.com/mick243
        <button className="github" onClick={newPageGithub}></button>
      </p>
      <hr className="bar"></hr>
      <p className="last-word1">
        This is a space to create and store new records of life as a developer.
        <br />
        The beginning of new class.
      </p>
      <p className="last-word2">This is a space to create and store new</p>
      <Footer2 />
    </ContactStyle>
  );
};

const ContactStyle = styled.div`
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
    margin-top: 25px;
    color: #ffffff;
  }

  .adress {
    margin-left: 480px;
    font-family: Pretendard;
    font-weight: 700;
    font-size: 48px;
    line-height: 140%;
    letter-spacing: -0.5px;
    color: #ffffff;
    text-align: left;
  }

  .github {
    align-self: flex-end;
    margin-left: 270px;
    justify-content: space-between;
  }

  .bar {
    width: 960px;
    margin-left: 480px;
    margin-top: 25px;
    color: #ffffff;
  }

  .last-word1 {
    margin-left: 480px;
    margin-top: 25px;
    font-family: Pretendard;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: -0.5px;
    color: #ffffff;
  }

  .last-word2 {
    margin-left: 480px;
    margin-top: 25px;
    font-family: Pretendard;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: -0.5px;
    color: #ffffff;
  }

  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: transparent;
    color: #ffffff;
    border: 1px solid white;
    cursor: pointer;
    background-image: url("/images/Group 1321315055.png");
    background-size: cover;
    background-position: center;
  }
  ${media.phoneM`
    width: 340px;

    .head {
      margin-left: 5px;
      margin-top: 60px;
    }

    .head-word {
      width: 320px;
      margin-left: 5px;
    }

    .bar {
      width: 327px;
      margin-left: 5px;
    }

    .adress {
      width: 330px;
      margin-left: 5px;
      font-family: Pretendard;
      font-weight: 700;
      font-style: Bold;
      font-size: 24px;
      leading-trim: NONE;
      line-height: 140%;
      letter-spacing: -0.5px;
    }

    .github {
      align-self: flex-end;
      margin-left: 10px;
      justify-content: space-between;
    }

     button {
      width: 28px;
      height: 28px;
      background-size: cover;
      background-position: center;
    }

    .last-word1 {
      margin-left: 5px;
      width: 318px;
      font-family: Pretendard;
      font-weight: 400;
      font-style: Regular;
      font-size: 16px;
      leading-trim: NONE;
      line-height: 160%;
      letter-spacing: -0.5px;
    }

    .last-word2 {
      width: 318px;
      margin-left: 5px;
    }
  `}

  ${media.tablet`
    `}
`;

export default Contact;
