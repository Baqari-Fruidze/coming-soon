import styled from "styled-components";
import testLogo from "/images/Color logo with background.svg";
export default function Header() {
  return (
    <Parent>
      <ContentCon>
        <LogoImg src={testLogo} alt="" />
      </ContentCon>
    </Parent>
  );
}

const LogoImg = styled.img`
  width: 31.9rem;
  height: 7.7rem;
  @media (min-width: 768px) {
    width: 42.3rem;
    height: 9.7rem;
  }
  @media (min-width: 1440px) {
    width: 64.7rem;
    height: 13.1rem;
  }
`;

const ContentCon = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;
const Parent = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 14.3rem;
  padding-bottom: 22.8rem;
  @media (min-width: 768px) {
    padding-top: 16.3rem;
    padding-bottom: 22.8rem;
  }
`;
