import styled from "styled-components";
import icon from "/images/checkbox-indeterminate-fill.svg";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function Repeat() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 767px)");
  return (
    <Parent>
      <Icon src={icon} alt="" />
      <Span>
        თქვენ უკვე აირჩიეთ სტატუსი, მადლობას გიხდით{" "}
        {isSmallDevice ? <br /> : null}
        თანამშრომლობისათვის
      </Span>
    </Parent>
  );
}
const Parent = styled.div`
  display: flex;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  align-items: center;
  gap: 13px;
`;
const Icon = styled.img`
  width: 50px;
  height: 50px;
`;
const Span = styled.span`
  color: #e56d6d;
  font-family: "BPG Glaho";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;
