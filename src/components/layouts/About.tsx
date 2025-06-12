import styled from "styled-components";

const About = () => {
  return (
    <AboutStyle>
      <p>&lt; about</p>
      <p>
        Hello!
        <br />
        Welcome to the Full Stack Developer Studio.
      </p>
      <p>
        This is a space to create and store new records of life as a developer.
        <br />
        The beginning of a new class, featuring the lives of various developers.
      </p>
      <p>
        안녕하세요.
        <br />
        풀스택 개발자 강정민의 스튜디오입니다.
      </p>
      <p>&lt; skils</p>
    </AboutStyle>
  );
};

const AboutStyle = styled.div`
  p {
    color: #ffffff;
  }
`;

export default About;
