'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,

  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },

    tooltips: {
      position: "nearest",
      mode: "index",
      intersect: false,
      yPadding: 10,
      xPadding: 10,
      caretSize: 4,
      backgroundColor: "rgba(72, 241, 12, 1)",
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "#1967d2",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 4,
    },
  },
};

const labels = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"];

export const data = {
  labels,
  datasets: [
    {
      label: "Jeux de données",
      data: labels.map(() => faker.datatype.number({ min: 100, max: 400 })),
      borderColor: "#1967d2",
      backgroundColor: "#1967d2",
      data: [196, 132, 215, 362, 210, 252],
      fill: false,
    },
  ],
};

const ProfileChart = () => {
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Vos vues de profil</h4>
        <div className="chosen-outer">
          {/* <!--Tabs Box--> */}
          <select className="chosen-single form-select">
            <option>6 derniers mois</option>
            <option>12 derniers mois</option>
            <option>16 derniers mois</option>
            <option>24 derniers mois</option>
            <option>5 dernières années</option>
          </select>
        </div>
      </div>
      {/* End widget top bar */}

      <div className="widget-content">
        <Line options={options} data={data} />
      </div>
      {/* End  profile chart */}
    </div>
  );
};

export default ProfileChart;
