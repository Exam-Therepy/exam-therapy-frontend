// components/SalesChart.js

import { Line } from 'react-chartjs-2';
import "chart.js/auto"

const SalesChart = ({ salesData }) => {
  const data = {
    labels: salesData.map(({ month }) => month),
    datasets: [
      {
        label: 'Sales',
        data: salesData.map(({ amount }) => amount),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category',
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <Line data={data} options={options} />
    </div>
  );
};

export default SalesChart;
