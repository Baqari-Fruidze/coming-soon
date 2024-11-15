import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CountdownTimer = () => {
  // Set the target date (January 31, 2025)
  const targetDate = new Date("2025-01-31T00:00:00");

  // State to store the remaining time, ensuring all values are numbers
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Function to calculate the time left
  const calculateTimeLeft = () => {
    const now = new Date();
    const timeDifference = targetDate.getTime() - now.getTime(); // Ensure this is in milliseconds (number)

    if (timeDifference <= 0) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    // Calculate the remaining time in days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update the state with the new values
    setTimeLeft({ days, hours, minutes, seconds });
  };

  useEffect(() => {
    calculateTimeLeft(); // Calculate once on mount
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div>
      <h1>Countdown to January 31, 2025</h1>
      <div>
        <Para>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
          {timeLeft.seconds}s
        </Para>
      </div>
    </div>
  );
};

export default CountdownTimer;

const Para = styled.p`
  color: #fff;
  font-size: 22px;
`;
