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
    navigate("/Work");
  };
  const handleArticleClick = () => {
    navigate("/Article");
  };
  const handleContactClick = () => {
    navigate("/Contact");
  };

  return (
    <HeaderStyle>
      <div>
        <p className="logo" onClick={handleLogoClick}>
          &lt; LOG
        </p>
        <ul className="menu">
          <li>
            <p className="about" onClick={handleAboutClick}>
              About
            </p>
          </li>
          <li>
            <p className="work" onClick={handleWorkClick}>
              Work
            </p>
          </li>
          <li>
            <p className="article" onClick={handleArticleClick}>
              Article
            </p>
          </li>
          <li>
            <p className="contact" onClick={handleContactClick}>
              Contact
            </p>
          </li>
        </ul>
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
    width: 50px;
    margin-top: 40px;
    cursor: pointer;
  }

  .menu {
    width: 301px;
    height: 26px;
    margin-left: auto;
    margin-top: -55px;
    justify-content: space-between;

    li {
      display: inline-block;
    }

    .about {
      width: 43px;
    }

    .work {
      width: 37px;
      margin-left: 40px;
    }

    .article {
      width: 45px;
      margin-left: 40px;
    }

    .contact {
      width: 56px;
      margin-left: 40px;
    }

    p: hover {
      cursor: pointer;
    }
  }
`;

export default Header;
