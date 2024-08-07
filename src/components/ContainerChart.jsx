import React from "react";

import PerformanceChart from './performanceChart.jsx';
import ScoreChart from './ScoreChart.jsx';
import ActivityChart from './ActivityChart.jsx';
import SessionChart from './SessionChart.jsx';

export const CustomTooltip = ({ active, payload}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`Durée : ${payload[0].value} minutes`}</p>
      </div>
    );
  }

  return null;
};

const ContainerChart = () => {
  const userId = 18;

  return (
    <div className="ContainerChart">
      <div className="main-charts-section">
        <ActivityChart userId={userId}/>
        <div className="detailed-metrics-charts">
      <SessionChart userId={userId}/>
      <PerformanceChart userId={userId}/>
      <ScoreChart userId={userId}/>
            
        </div>
      </div>
      <div className="nutrition-stats-section">
        <div className="info-box"><img src="calories-icon.svg" alt="calories icon" />
        <div className="info-text">
                <p>1,930kCal</p>
                <p>Calories</p>
            </div>
            </div>
        <div className="info-box"><img src="protein-icon.svg" alt="protein icon" />
        <div className="info-text">
                <p>155g</p>
                <p>Protéines</p>
            </div>
        </div>
        <div className="info-box"><img src="carbs-icon.svg" alt="carbs icon" />
        <div className="info-text">
                <p>290g</p>
                <p>Glucides</p>
            </div>
        </div>
        <div className="info-box"><img src="fat-icon.svg" alt="fat icon" />
        <div className="info-text">
                <p>50g</p>
                <p>Lipides</p>
            </div>
        </div>
      
    </div>
    </div>
  );
};


export default ContainerChart;
