import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Legend,
  Radar,
  PieChart,
  Pie,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  DefaultLegendContent,
  BarChart,
  Bar,
  Rectangle,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { 
  activityData, 
  sessionData, 
  performanceData, 
  scoreData, 
  nutritionData,
  activityDataFalse,
} from '../mockData.js';
import PerformanceChart from './performanceChart.jsx';
import ScoreChart from './ScoreChart.jsx';
import ActivityChart from './ActivityChart.jsx';

const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 300, pv: 3300, amt: 5400 },
  { name: "Page C", uv: 900, pv: 4300, amt: 5400 },
];

const ContainerChart = () => {
  return (
    <div className="ContainerChart">
      <div className="main-charts-section">
        <ActivityChart/>
        <div className="detailed-metrics-charts">
        <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={sessionData}>
        <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <Line type="monotone" dataKey="duration" stroke="#FF0000" />
        </LineChart>
      </ResponsiveContainer>
      <PerformanceChart/>
      <h2>Score</h2>
      <ScoreChart/>
            
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
