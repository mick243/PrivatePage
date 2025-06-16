import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Main = () => {
  return (
    <>
      <Header />
      <MainStyle>
        <p className="home">&lt;home</p>
        <p className="first-word">
          Hello!
          <br />
          Welcome to the Full Stack Developer Studio.
        </p>
        <hr className="top-bar"></hr>
        <p className="main-title">&lt; LOG</p>
        <hr className="bottom-bar"></hr>
        <p className="last-word">
          The log where the class started was created as a space to contain life
          <br />
          as a developer and move forward.
        </p>
        <BackgroundVideo autoPlay loop muted playsInline>
          <source src="/videos/log.mp4" type="video/mp4" />
        </BackgroundVideo>
      </MainStyle>
      <Footer />
    </>
  );
};

const MainStyle = styled.div`
  margin-top: 89px;
  margin-left: 480px;
  height: 802px;

  p {
    color: #ffffff;
  }

  .home {
    font-family: Pretendard;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: -0.5px;
    color: #5398ff;
  }

  .first-word {
    margin-top: 40px;
    font-family: Pretendard;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: -0.5px;
  }

  .last-word {
    margin-top: 20px;
    font-family: Pretendard;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: -0.5px;
  }

  .top-bar {
    width: 960px;
    margin-left: -1px;
    margin-top: 25px;
    color: #ffffff;
    position: relative;
  }

  .bottom-bar {
    width: 960px;
    color: #ffffff;
    margin-left: -1px;
  }

  .main-title {
    weight: 697px;
    height: 134px;
    margin-left: 100px;
    margin-top: 0px;
    color: #ffffff;
    font-family: Pretendard;
    font-weight: 700;
    font-size: 240px;
    line-height: 140%;
    letter-spacing: -0.5px;
    justify-content: space-between;
  }
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 215px;
  left: -79px;
  width: 1865px;
  height: 1040px;
  object-fit: cover;
  filter: blur(8px);
  z-index: -1;
`;

export default Main;
