import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(`/`);
  };

  const handleAboutClick = () => {
    navigate(`/About`);
  };
  const handleWorkClick = () => {
    navigate("/");
  };
  const handleArticleClick = () => {
    navigate("/");
  };
  const handleContactClick = () => {
    navigate("/");
  };

  return (
    <HeaderStyle>
      <p className="logo" onClick={handleLogoClick}>
        &lt; LOG
      </p>
      <div className="menu">
        <p className="about" onClick={handleAboutClick}>
          About
        </p>
        <p className="work" onClick={handleWorkClick}>
          Work
        </p>
        <p className="article" onClick={handleArticleClick}>
          Article
        </p>
        <p className="contact" onClick={handleContactClick}>
          Contact
        </p>
      </div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  width: 960px;
  height: 90px;
  margin-left: 480px;
  align-items: center;
  justify-content: space-between;

  .logo {
    width: 45px;
    margin-top: 40px;
    cursor: pointer;
  }

  .menu {
    width: 301px;
    height: 26px;
    margin-left: auto;
    margin-top: -38px;
    justify-content: space-between;

    .about {
      width: 43px;
    }

    .work {
      width: 43px;
    }

    .article {
      width: 43px;
    }

    .contact {
      width: 43px;
    }

    p: hover {
      cursor: pointer;
    }
  }
`;

export default Header;
