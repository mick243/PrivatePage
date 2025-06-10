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
      </MainStyle>
      <Footer />
    </>
  );
};

const MainStyle = styled.div`
  margin-left: 480px;

  .top-bar {
    width: 960px;
    margin-left: -1px;
    position: relative;
  }

  .bottom-bar {
    width: 960px;
    margin-left: -1px;
  }

  .main-title {
    weight: 697px;
    height: 334px;
    font-size: 240px;
    justify-content: space-between;
  }
`;

export default Main;
