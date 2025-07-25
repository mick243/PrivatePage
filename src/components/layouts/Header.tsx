import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { media } from "../styles/media";
import { useEffect, useState } from "react";

const Header = () => {
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
  // const handleArticleClick = () => {
  //   navigate("/Article");
  // };
  const handleContactClick = () => {
    navigate("/Contact");
  };

  return (
    <HeaderStyle>
      <div>
        <p className="logo" onClick={handleLogoClick}>
          &lt; LOG
        </p>
        {isMobile ? (
          <></>
        ) : (
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
            {/* <li>
              <p className="article" onClick={handleArticleClick}>
                Article
              </p>
            </li> */}
            <li>
              <p className="contact" onClick={handleContactClick}>
                Contact
              </p>
            </li>
          </ul>
        )}
      </div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  width: 960px;
  height: 60px;
  margin-left: 480px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #2f333a;

  ${media.phoneM`
    width: 327px;
  `}

  .logo {
    width: 50px;
    cursor: pointer;
    margin-top: 40px;
    font-family: Pretendard;
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: -0.5px;
    color: #ffffff;

    ${media.phoneM`
      margin-top: 60px;  
    `}
  }

  .menu {
    width: 301px;
    height: 26px;
    margin-left: auto;
    margin-right: -85px;
    margin-top: -55px;
    font-family: Pretendard;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: -0.5px;
    justify-content: space-between;

    li {
      display: inline-block;
    }

    .about {
      width: 43px;
      color: #ffffff;
    }

    .work {
      width: 37px;
      margin-left: 40px;
      color: #ffffff;
    }

    .article {
      width: 45px;
      margin-left: 40px;
      color: #ffffff;
    }

    .contact {
      width: 56px;
      margin-left: 40px;
      color: #ffffff;
    }

    p: hover {
      cursor: pointer;
    }
  }

  ${media.phoneM`
    width: 327px;
    height:50px;
    margin-left: 24px;

    .menu li {
      display: none;
    }
    `}

  ${media.tablet`
    `}
`;

export default Header;
