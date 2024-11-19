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
import { Idata } from "../pages/SelectRole";

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

const ChatBar = ({ info }: { info: Idata }) => {
  const data = {
    labels: ["", ""],
    datasets: [
      {
        label: "",
        data: [info.investors, info.entrepreneurs],
        backgroundColor: ["#C7D9FF", "#E2CAA9"],
        barThickness: 70,
        borderRadius: 10,
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
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#FFFFFF",
          font: {
            size: 22,
            family: "Chivo",
          },
          callback: function (value: string | number, index: number) {
            if (typeof value === "number") {
              return data.datasets[0].data[index];
            }
            return value;
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
          font: {
            size: 22,
            family: "Chivo",
          },
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
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #c7d9ff;
  @media (min-width: 768px) {
    width: 22px;
    height: 22px;
  }
  @media (min-width: 1440px) {
    width: 28px;
    height: 28px;
  }
`;

const Circlei = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #e2caa9;
  @media (min-width: 768px) {
    width: 22px;
    height: 22px;
  }
  @media (min-width: 1440px) {
    width: 28px;
    height: 28px;
  }
`;

const Parent = styled.div`
  display: flex;
  gap: 7rem;
  align-items: center;
  margin-bottom: 2rem;
  margin-left: 16%;
  @media (min-width: 768px) {
    margin-left: 20%;
    gap: 23rem;
  }
  @media (min-width: 1440px) {
    gap: 27rem;
  }
`;

const SigleCon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (min-width: 768px) {
  }
`;

const Texte = styled.span`
  color: #c7d9ff;
  font-family: Chivo;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (min-width: 768px) {
    font-size: 22px;
  }
  @media (min-width: 1440px) {
    font-size: 36px;
  }
`;

const Texti = styled.span`
  color: #e2caa9;
  font-family: Chivo;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (min-width: 768px) {
    font-size: 22px;
  }
  @media (min-width: 1440px) {
    font-size: 36px;
  }
`;

export default ChatBar;
