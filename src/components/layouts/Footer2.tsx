import styled from "styled-components";
import { media } from "../styles/media";
import { useEffect, useState } from "react";

const Footer2 = () => {
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
        문의사항은 위 연락처를 통해 부탁드립니다.
        <br />
        감사합니다.
      </p>
      {isMobile ? (
        <p className="copyright">Data has been created since 2025.</p>
      ) : (
        <p className="copyright">
          Data has been <br />
          created since 2025.
        </p>
      )}
    </FooterStyle>
  );
};

const FooterStyle = styled.div`
  width: 960px;
  height: 50px;
  margin-top: 150px;
  color: #ffffff;
  position: center;
  margin-left: 480px;
  align-items: center;
  justify-content: space-between;

  p {
    font-family: Pretendard;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    letter-spacing: -0.3px;
    color: #ffffff;
  }

  .copyright {
    width: 150px;
    height: 44px;
    text-align: right;
    margin-left: auto;
    margin-top: -60px;
    font-family: Pretendard;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    letter-spacing: -0.5px;
    justify-content: space-between;
    padding-bottom: 50px;
  }

  ${media.phoneM`
    width: 327px;
    margin-left: 5px;
    margin-top: 70px;
  
    .copyright {
      width: 250px;
      text-align: left;
      margin-left: 0;
      margin-top: 40px;
    }
  `}

  ${media.tablet`
    `}
`;

export default Footer2;
