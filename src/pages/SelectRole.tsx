import { useEffect, useState } from "react";
import CountDown from "../components/CountDown";
import styled from "styled-components";
import Success from "../components/Success";
import Repeat from "../components/Repeat";
import previous from "/images/scroll-to-bottom-fill.svg";
import { useNavigate } from "react-router-dom";

export default function SelectRole() {
  const [choice, setChoice] = useState({
    choice: "",
  });
  const [chosen, setChosen] = useState<boolean>(false);
  const [info, setInfo] = useState({});
  const [show, setShow] = useState<boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (choice.choice) {
      const foo = async () => {
        try {
          const res = await fetch(
            "https://chic-communication-coming-soon.up.railway.app/api/choice/",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(choice),
            }
          );

          if (!res.ok) {
            setChosen(true);
          }
          if (res.ok) {
            const data = await res.json();
            setInfo(data);
            setShow(true);
          }
        } catch (err) {
          console.error("Error:", err);
        }
      };
      foo();
    }
  }, [choice]);
  console.log(choice);
  console.log(info);
  console.log(chosen);
  return (
    <Parent>
      <CountDown />
      <RoleSelect>
        <RoleText
          onClick={() => setChoice({ ...choice, choice: "entrepreneur" })}
        >
          მეწარმე
        </RoleText>
        <VerticalLine />
        <RoleText onClick={() => setChoice({ ...choice, choice: "investor" })}>
          ინვესტორი
        </RoleText>
      </RoleSelect>
      {show ? <Success /> : null}
      {chosen ? <Repeat /> : null}
      <BottommCon onClick={() => navigate("/")}>
        <Img src={previous} alt="" />
        <Mini>უკან</Mini>
      </BottommCon>
    </Parent>
  );
}

const BottommCon = styled.div`
  display: flex;
  gap: 23px;
  align-items: center;
`;
const Mini = styled.span`
  color: #e2caa9;
  font-family: Nino;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`;
const Img = styled.img`
  width: 4rem;
  height: 4rem;
  transform: rotate(90deg);
`;
const RoleText = styled.span`
  color: #c7d9ff;
  font-family: Nino;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: relative;

  @media (min-width: 768px) {
    font-size: 50px;
  }

  @media (min-width: 1440px) {
    font-size: 70px;
  }

  &:hover {
    padding-bottom: 15px;
    color: #e2caa9;
    cursor: pointer;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0; /* Position at the bottom of the span */
    left: 0; /* Start from the left */
    height: 2px; /* Border thickness */
    width: 0; /* Initially hidden */
    background-color: #e2caa9; /* Border color */
    transition: width 0.4s ease; /* Smooth animation for width */
  }

  &:hover::after {
    width: 100%;
    height: 5px;
  }
`;

const VerticalLine = styled.hr`
  background-color: #c7d9ff;
  width: 4px;
  height: 28px;
  @media (min-width: 768px) {
    height: 66px;
  }
  @media (min-width: 1440px) {
    height: 81px;
  }
`;
const RoleSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  @media (min-width: 768px) {
    gap: 26px;
  }
  @media (min-width: 1440px) {
    gap: 68px;
  }
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14rem;
  align-items: center;
  padding-bottom: 5rem;
  @media (min-width: 768px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;
