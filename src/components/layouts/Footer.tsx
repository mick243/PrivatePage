import styled from "styled-components";
import { media } from "../styles/media";
import { useEffect, useState } from "react";

const Footer = () => {
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
    <FooterStyle>
      <p>
        안녕하세요.
        <br />
        풀스택 개발자 강정민의 스튜디오입니다.
      </p>
      <p>
        {isMobile ? (
          <>
            Class가 시작된 저의 LOG는 개발자로서의 삶을 담고
            <br />
            앞으로 나아갈 수 있는 공간으로 만들어졌습니다.
          </>
        ) : (
          <>
            Class가 시작된 저의 LOG는 개발자로서의
            <br />
            삶을 담고 앞으로 나아갈 수 있는 공간으로 만들어졌습니다.
          </>
        )}
      </p>
      <p className="copyright">
        Data has been <br /> created since 2025.
      </p>
    </FooterStyle>
  );
};

const FooterStyle = styled.div`
  width: 960px;
  height: 50px;
  color: #ffffff;
  position: center;
  margin-left: 480px;
  align-items: center;
  justify-content: space-between;

  p {
    font-family: Pretendard;
    font-weight: 300;
    font-size: 14px;
    line-height: 160%;
    letter-spacing: -0.3px;
    color: #ffffff;
    white-space: pre-line;
  }

  .copyright {
    width: 150px;
    height: 44px;
    text-align: right;
    margin-left: auto;
    margin-top: -55px;
    font-family: Pretendard;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    letter-spacing: -0.5px;
    justify-content: space-between;
  }
  ${media.phoneM`
    width: 327px;
    margin-left: 24px;

    p {
      white-space: pre-line;
    }

    .copyright {
      display: none;
    }
    `}

  ${media.tablet`
    `}
`;

export default Footer;
