import { useMediaQuery } from "@uidotdev/usehooks";
import { useState, useEffect } from "react";
import styled from "styled-components";

type TimeLeft = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

const CountdownTimer = () => {
  const targetDate = new Date("2025-01-31T00:00:00");

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const isSmallDevice = useMediaQuery("only screen and (max-width : 767px)");

  const calculateTimeLeft = () => {
    const now = new Date();
    const timeDifference = targetDate.getTime() - now.getTime();

    if (timeDifference <= 0) {
      setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    setTimeLeft({
      days: days.toString().padStart(2, "0"),
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
    });
  };

  useEffect(() => {
    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Parent>
      <DayHour>
        <SingleCon>
          <SingleTypeCon>
            <SingleCharCon>
              <GreenText>{timeLeft.days[0]}</GreenText>
            </SingleCharCon>
            <SingleCharCon>
              <GreenText>{timeLeft.days[1]}</GreenText>
            </SingleCharCon>
          </SingleTypeCon>
          <TextSpan>დღე</TextSpan>
        </SingleCon>
        <Separator>:</Separator>
        <SingleCon>
          <SingleTypeCon>
            <SingleCharCon>
              <GreenText>{timeLeft.hours[0]}</GreenText>
            </SingleCharCon>
            <SingleCharCon>
              <GreenText>{timeLeft.hours[1]}</GreenText>
            </SingleCharCon>
          </SingleTypeCon>
          <TextSpan>საათი</TextSpan>
        </SingleCon>
      </DayHour>
      {isSmallDevice ? null : <CustomSep>:</CustomSep>}
      <DayHour>
        <SingleCon>
          <SingleTypeCon>
            <SingleCharCon>
              <GreenText>{timeLeft.minutes[0]}</GreenText>
            </SingleCharCon>
            <SingleCharCon>
              <GreenText>{timeLeft.minutes[1]}</GreenText>
            </SingleCharCon>
          </SingleTypeCon>
          <TextSpan>წუთი</TextSpan>
        </SingleCon>
        <Separator>:</Separator>
        <SingleCon>
          <SingleTypeCon>
            <SingleCharCon>
              <GreenText>{timeLeft.seconds[0]}</GreenText>
            </SingleCharCon>
            <SingleCharCon>
              <GreenText>{timeLeft.seconds[1]}</GreenText>
            </SingleCharCon>
          </SingleTypeCon>
          <TextSpan>წამი</TextSpan>
        </SingleCon>
      </DayHour>
    </Parent>
  );
};

export default CountdownTimer;

const CustomSep = styled.span`
  color: #c7d9ff;
  font-family: Chivo;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 1.5rem;
  @media (min-width: 1440px) {
    margin-top: 2.5rem;
  }
`;
const GreenText = styled.span`
  color: #a6d971;
  font-family: Chivo;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (min-width: 768px) {
    font-size: 75px;
  }
  @media (min-width: 1440px) {
    font-size: 96px;
  }
`;

const TextSpan = styled.span`
  color: #c7d9ff;
  font-family: Nino;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: -3rem;
  @media (min-width: 768px) {
    font-size: 24px;
    margin-bottom: -6rem;
  }
  @media (min-width: 1440px) {
    font-size: 36px;
  }
`;

const SingleTypeCon = styled.div`
  display: flex;
`;
const SingleCharCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #6287d6;
  width: 58px;
  height: 91px;
  @media (min-width: 768px) {
    width: 7rem;
    height: 11rem;
  }
  @media (min-width: 1440px) {
    width: 8rem;
    height: 12.7rem;
  }
`;
const Separator = styled.span`
  color: #c7d9ff;
  font-family: Chivo;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const SingleCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  align-items: center;
`;

const DayHour = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;
`;
const Parent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4.4rem;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1.4rem;
  }
`;
