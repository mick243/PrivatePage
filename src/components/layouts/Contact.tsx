import styled from "styled-components";

const Contact = () => {
  return (
    <ContactStyle>
      <p className="head">&lt; contact</p>
      <p>
        Hello! <br />
        Welcome to the Full Stack Developer Studio
      </p>
      <hr className="bar"></hr>
      <p className="adress">블로그 주소</p>
      <p className="adress">깃허브 주소</p>
      <hr className="bar"></hr>
      <footer>
        <p className="last-word1">
          안녕하세요.
          <br />
          풀스택 개발자 강정민의 스튜디오입니다.
        </p>
        <p className="last-word2">
          문의사항은 위 연락처를 통해 부탁드립니다.
          <br />
          감사합니다.
        </p>
        <p className="copyright">
          Data has been
          <br />
          created since 2025.
        </p>
      </footer>
    </ContactStyle>
  );
};

const ContactStyle = styled.div`
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
  p {
    margin-left: 480px;
    color: #ffffff;
  }

  .adress {
    color: #ffffff;
    text-align: left;
  }

  .bar {
    width: 960px;
    margin-left: 480px;
    margin-top: 25px;
    color: #ffffff;
  }

  .copyright {
    width: 150px;
    height: 44px;
    margin-left: auto;
    margin-right: 395px;
    margin-top: -55px;
    font-family: Pretendard;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    letter-spacing: -0.5px;
    justify-content: space-between;
  }
`;

export default Contact;
