import styled from "styled-components";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
  ChartDataLabels
);

const ChartContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 360px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 750px;
  }

  @media (min-width: 1025px) {
    max-width: 906px;
  }
`;

const ChatBar = () => {
  const data = {
    labels: ["", ""],
    datasets: [
      {
        label: "Messages Sent",
        data: [1, 19],
        backgroundColor: ["#C7D9FF", "#E2CAA9"],
        barThickness: 70,
        borderRadius: 10, // Apply border radius to the bars
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
      datalabels: {
        display: false, // Set display to false to remove labels from the columns
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#FFFFFF",
          callback: function (value, index) {
            return data.datasets[0].data[index];
          },
        },
      },
      y: {
        grid: {
          color: "#2F56A8",
          lineWidth: 2,
        },
        ticks: {
          color: "#FFFFFF",
          beginAtZero: true,
        },

        border: {
          display: false,
        },
      },
    },
  };

  return (
    <ChartContainer>
      <Parent>
        <SigleCon>
          <CircleE></CircleE>
          <Texte>მეწარმე</Texte>
        </SigleCon>
        <SigleCon>
          <Circlei></Circlei>
          <Texti>ინვესტორი</Texti>
        </SigleCon>
      </Parent>

      <Bar data={data} options={options} />
    </ChartContainer>
  );
};
const CircleE = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #c7d9ff;
`;
const Circlei = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #e2caa9;
`;
const Parent = styled.div`
  display: flex;
  gap: 5rem;
  align-items: center;
  margin-left: 20%;
  margin-bottom: 2rem;
`;
const SigleCon = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;
const Texte = styled.span`
  color: #c7d9ff;
  font-family: Chivo;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Texti = styled.span`
  color: #e2caa9;
  font-family: Chivo;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export default ChatBar;
