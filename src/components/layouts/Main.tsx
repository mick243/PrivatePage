import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Main = () => {
  return (
    <>
      <Header />
      <MainStyle>
        <p>&lt; home</p>
        <p>
          Hello!
          <br />
          Welcome to the Full Stack Developer Studio.
        </p>
        <hr className="top-bar"></hr>
        <p className="main-title">&lt; LOG</p>
        <hr className="bottom-bar"></hr>
        <p>
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
  margin-left: 480px;

  p {
    color: #ffffff;
  }

  .top-bar {
    width: 960px;
    margin-left: -1px;
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
    height: 334px;
    color: #ffffff;
    font-size: 240px;
    justify-content: space-between;
  }
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 215px;
  left: -79px;
  width: 1865px;
  height: 1049px;
  object-fit: cover;
  filter: blur(8px);
  z-index: -1;
`;

export default Main;
