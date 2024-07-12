import React from 'react';
import { Line } from 'react-chartjs-2';

const AverageSessionDuration = () => {
  const data = {
    labels: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
    datasets: [
      {
        label: 'Durée moyenne des sessions',
        data: [30, 45, 50, 60, 70, 68, 60],
        borderColor: 'red',
        fill: true,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Durée moyenne des sessions</h2>
      <Line data={data} />
    </div>
  );
};

export default AverageSessionDuration;
