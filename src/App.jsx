import React from 'react';
import Header from './components/Header';
import ContainerChart from './components/ContainerChart';
import DailyActivityChart from './components/DailyActivityChart';
import AverageSessionDuration from './components/AverageSessionDuration';
import IntensityRadarChart from './components/IntensityRadarChart';
import NutrientInfoCard from './components/NutrientInfoCard';
import ScoreIndicator from './components/ScoreIndicator';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <ContainerChart />
      </div>
    </div>
  );
};

export default App;
