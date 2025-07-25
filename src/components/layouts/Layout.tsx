import { media } from "../styles/media";
import Header from "./Header";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <BackgroundVideo autoPlay loop muted playsInline>
        <source src="/videos/log.mp4" type="video/mp4" />
      </BackgroundVideo>
      <ContentWrapper>
        <Header />
        {children}
      </ContentWrapper>
    </>
  );
};

const BackgroundVideo = styled.video`
  position: fixed;
  top: 215px;
  left: -79px;
  width: 1865px;
  height: 1040px;
  object-fit: cover;
  filter: blur(8px);
  z-index: -1;

  ${media.phoneM`
      position: fixed;
      width: 375px;
      left: 0;
      top: 0px;
      object-fit: cover;
      filter: blur(8px);
      z-index: -1;
    `}
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

export default Layout;
