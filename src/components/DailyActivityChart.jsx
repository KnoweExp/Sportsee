import React from 'react';
import { Bar } from 'react-chartjs-2';

const DailyActivityChart = () => {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [
      {
        label: 'Poids (kg)',
        data: [70, 70.5, 70.2, 69.8, 70, 70.1, 70, 70.2, 70.1, 70.5],
        backgroundColor: 'black',
      },
      {
        label: 'Calories brûlées (kCal)',
        data: [500, 600, 550, 700, 650, 500, 600, 550, 700, 750],
        backgroundColor: 'red',
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Activité quotidienne</h2>
      <Bar data={data} />
    </div>
  );
};

export default DailyActivityChart;
