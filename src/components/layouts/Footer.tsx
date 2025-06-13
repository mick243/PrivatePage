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
  height: 90px;
  color: #ffffff;
  position: center;
  margin-left: 480px;
  align-items: center;
  justify-content: space-between;

  .copyright {
    width: 150px;
    height: 44px;
    text-align: right;
    margin-left: auto;
    margin-top: -55px;
    justify-content: space-between;
  }
`;

export default Footer;
