import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <p>
        안녕하세요.
        <br />
        풀스택 개발자 강정민의 스튜디오입니다.
      </p>
      <p>
        Class가 시작된 저의 LOG는 개발자로서의 삶을 담고
        <br />
        앞으로 나아갈 수 있는 공간으로 만들어졌습니다.
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
    margin-top: -55px;
    font-family: Pretendard;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    letter-spacing: -0.5px;
    justify-content: space-between;
  }
`;

export default Footer;
