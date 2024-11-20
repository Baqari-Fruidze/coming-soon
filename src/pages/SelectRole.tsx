import { useEffect, useState } from "react";
import CountDown from "../components/CountDown";
import styled from "styled-components";
import Success from "../components/Success";
import Repeat from "../components/Repeat";
import previous from "/images/scroll-to-bottom-fill.svg";
import { useNavigate } from "react-router-dom";
import investori from "../Investori.json";
import mewarme from "../mewarme.json";
import ChatBar from "../components/ChatBar";
import { Helmet } from "react-helmet";

export interface Idata {
  investors: number;
  entrepreneurs: number;
}

export default function SelectRole() {
  const [chat, setChat] = useState<boolean>(false);
  const [selected, setSelected] = useState<boolean>(false);
  const [invAdvice, setInvAdvice] = useState({
    title: "",
    content: "",
  });
  const [mewAdvice, setMewAdvice] = useState({ title: "", content: "" });
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * investori.sections.length);
    setInvAdvice(investori.sections[randomIndex]);
  }, []);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * mewarme.sections.length);
    setMewAdvice(mewarme.sections[randomIndex]);
  }, []);

  const [choice, setChoice] = useState({
    choice: "",
  });
  const [chosen, setChosen] = useState<boolean>(false);
  const [info, setInfo] = useState<Idata>({
    investors: 1,
    entrepreneurs: 1,
  });
  const [show, setShow] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const foo = async () => {
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

      if (res.status === 302) {
        setChosen(true);
        const data = await res.json();
        setInfo(data);
        setSelected(true);
        setChat(true);
      }

      if (res.status === 201) {
        const data = await res.json();
        setInfo(data);
        setShow(true);
        setSelected(true);
      }
    };

    foo();
  }, [choice]);
  return (
    <Parent>
      <Helmet>
        <title>Dealin</title>
        <meta name="description" content="Welcome to My Website" />
        <link rel="icon" href="/images/rfgt.png" sizes="32x32" />
      </Helmet>
      <CountDown />

      {selected ? null : (
        <RoleSelect>
          <RoleText
            onClick={() => setChoice({ ...choice, choice: "entrepreneur" })}
          >
            მეწარმე
          </RoleText>
          <VerticalLine />
          <RoleText
            onClick={() => setChoice({ ...choice, choice: "investor" })}
          >
            ინვესტორი
          </RoleText>
        </RoleSelect>
      )}

      {show ? <Success /> : null}
      {chosen ? <Repeat /> : null}
      {show ? <ChatBar info={info} /> : chat ? <ChatBar info={info} /> : null}
      {show ? (
        <AdviceCon>
          <Header>
            {choice.choice === "entrepreneur"
              ? mewAdvice.title
              : invAdvice.title}
          </Header>
          <Text>
            "
            {choice.choice === "entrepreneur"
              ? mewAdvice.content
              : invAdvice.content}
            "
          </Text>
          <VerticalLinee />
          <Text>
            {choice.choice === "entrepreneur"
              ? mewarme.common
              : investori.common}
          </Text>
        </AdviceCon>
      ) : null}

      <BottommCon onClick={() => navigate("/")}>
        <Img src={previous} alt="" />
        <Mini>უკან</Mini>
      </BottommCon>
    </Parent>
  );
}

const VerticalLinee = styled.hr`
  background-color: #c7d9ff;
  width: 70%;
  height: 2px;
  align-self: center;
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
  }
`;
const Text = styled.p`
  color: #c7d9ff;
  text-align: center;
  font-family: Glaho;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  @media (min-width: 768px) {
    font-size: 19px;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
  }
`;
const Header = styled.p`
  color: #c7d9ff;
  text-align: center;
  font-family: Chivo;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 34px;
  @media (min-width: 768px) {
    font-size: 22px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`;
const AdviceCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
`;
const BottommCon = styled.div`
  display: flex;
  gap: 23px;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
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
