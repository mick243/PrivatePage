import styled from "styled-components";

const Work = () => {
  return (
    <WorkStyle>
      <p>&lt; work</p>
      <p>
        We carry out various development tasks including front-end, back-end,
        and full-stack
        <br />
        Check out our various development tasks!
      </p>
      <button>all</button>
      <button>front-end</button>
      <button>back-end</button>
      <button>full-stack</button>
    </WorkStyle>
  );
};

const WorkStyle = styled.div`
  button {
    width: 97px;
    height: 44px;
    border-radius: 40px;
    color: #ffffff;
    border: 1px solid #494f60;
    background-color: #010104;
    cursor: pointer;

    &: hover {
      background-color: #ffffff;
      color: #010104;
    }
  }

  p {
    color: #ffffff;
  }
`;

export default Work;
