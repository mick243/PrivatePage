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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

export default Layout;
