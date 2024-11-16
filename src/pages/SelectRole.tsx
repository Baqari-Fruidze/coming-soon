import React from "react";
import CountDown from "../components/CountDown";
import styled from "styled-components";

export default function SelectRole() {
  return (
    <Parent>
      <span>select</span>
      <CountDown />
    </Parent>
  );
}
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14rem;
  align-items: center;
`;
