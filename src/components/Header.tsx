import styled from "styled-components";
import logo from "/images/rfgt.png";
import textLogo from "/images/trhy-01.png";

export default function Header() {
  return (
    <Parent>
      <ContentCon>
        <LogoImg src={logo} alt="" />
        <TextLogoImg src={textLogo} alt="" />
      </ContentCon>
    </Parent>
  );
}

const LogoImg = styled.img`
  width: 10.3rem;
  height: 7.7rem;
`;
const TextLogoImg = styled.img`
  width: 19.2rem;
  height: 5.5rem;
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
`;
