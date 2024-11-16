import styled from "styled-components";
import icon from "/images/checkbox-circle-fill.svg";

export default function Success() {
  return (
    <Parent>
      <Icon src={icon} alt="" />
      <Span> თქვენ წარმატებით მიეცით ხმა</Span>
    </Parent>
  );
}

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;
const Parent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
const Span = styled.span`
  color: #a6d971;
  font-family: Glaho;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;
