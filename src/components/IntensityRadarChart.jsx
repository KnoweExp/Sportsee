import React from 'react';
import { Radar } from 'react-chartjs-2';

const IntensityRadarChart = () => {
  const data = {
    labels: ['Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité'],
    datasets: [
      {
        label: 'Intensity',
        data: [20, 30, 40, 50, 60, 70],
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        borderColor: 'red',
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Intensité</h2>
      <Radar data={data} />
    </div>
  );
};

export default IntensityRadarChart;
