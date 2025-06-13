import styled from "styled-components";

const Contact = () => {
  return (
    <ContactStyle>
      <p>&lt; contact</p>
      <p>
        Hello! <br />
        Welcome to the Full Stack Developer Studio
      </p>
      <hr></hr>
      <p>블로그 주소</p>
      <p>깃허브 주소</p>
      <hr></hr>
      <footer>
        <p>dd</p>
      </footer>
    </ContactStyle>
  );
};

const ContactStyle = styled.div`
  p {
    color: #ffffff;
  }
`;

export default Contact;
