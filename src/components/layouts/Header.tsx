import styled from "styled-components";

const Header = () => {
  return (
    <HeaderStyle>
      <p className="logo">&lt; LOG</p>
      <div className="menu">
        <a href="/About">About</a>
        <a href="/Work">Work</a>
        <a href="/Article">Article</a>
        <a href="/Contact">Contact</a>
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
    margin-top: 40px;
  }

  .menu {
    width: 301px;
    height: 26px;
    margin-left: auto;
    margin-top: -38px;
    justify-content: space-between;

    a {
      padding: 20px;
    }
  }
`;

export default Header;
