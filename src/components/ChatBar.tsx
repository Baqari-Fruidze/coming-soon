import styled from "styled-components";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ChartContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  /* Mobile (max width 768px) */
  @media (max-width: 768px) {
    max-width: 360px;
  }

  /* Tablet (769px to 1024px) */
  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 750px;
  }

  /* Desktop (min width 1025px) */
  @media (min-width: 1025px) {
    max-width: 906px;
  }
`;

const ChatBar = () => {
  const data = {
    labels: ["ინვესტორი", "მეწარმე"],
    datasets: [
      {
        label: "Messages Sent",
        data: [12, 19],
        backgroundColor: ["#C7D9FF", "#E2CAA9"],
        barThickness: 70, // Adjust column width
        borderRadius: 10, // Adds rounded corners
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Removes vertical gridlines
        },
        ticks: {
          color: "#FFFFFF", // Optional: Change x-axis labels to white
        },
      },
      y: {
        grid: {
          color: "#2F56A8", // Horizontal lines in the background
          lineWidth: 2, // Make horizontal lines thicker
        },
        ticks: {
          color: "#FFFFFF", // White numbers on the left side
          beginAtZero: true,
        },
        // Remove left border (vertical line near numbers)
        border: {
          display: false, // Removes the left vertical line
        },
      },
    },
  };

  return (
    <ChartContainer>
      <Bar data={data} options={options} />
    </ChartContainer>
  );
};

export default ChatBar;
