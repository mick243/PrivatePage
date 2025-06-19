import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import { media } from "../styles/media";

const Main = () => {
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
          {isMobile ? (
            <>
              The log where the class started was created
              <br />
              as a space to contain life as a developer and
              <br />
              move forward.
            </>
          ) : (
            <>
              The log where the class started was created as a space to contain
              life
              <br />
              as a developer and move forward.
            </>
          )}
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
    font-weight: 300;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: -0.5px;
    color: #5398ff;
  }

  .first-word {
    min-width: 300px;
    min-height: 50px;
    margin-top: 40px;
    font-family: Pretendard;
    font-weight: 300;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: -0.5px;
  }

  .last-word {
    min-width: 375px;
    min-height: 50px;
    margin-top: 20px;
    font-family: Pretendard;
    font-weight: 200;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: -0.5px;
    white-space: pre-line;
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
    min-width: 697px;
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

  ${media.phoneM`
    min-width: 375px;
    max-height: 667px;
    margin-left: 24px;

    .home {
      left: 0px;
    }

    .top-bar {
      width: 327px;
    }

    .bottom-bar {
      width: 327px;
    }

    .main-title {
      width: 229ox;
      height: 90px;
      margin-left: 40px;
      margin-top: 50px;
      font-family: Pretendard;
      font-weight: 700;
      font-size: 80px;
      line-height: 140%;
      letter-spacing: -0.5px;
    }
    
    .last-word {
      margin-top: 25px;
      white-space: pre-line;
    }
    
    `}

  ${media.tablet`
    width: 1024px;
    `}
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

  ${media.phoneM`
    width: 600px;
    left: -160px;
  `}

  ${media.tablet`
    width: 1024px;
    left: 0px;
  `}
`;

export default Main;
