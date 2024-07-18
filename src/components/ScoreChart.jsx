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
import React from 'react';  
import { 
    scoreData, 
  } from '../mockData.js';

  const COLORS = ['#FF0000', '#F0F0F0'];

const ScoreChart = () => {
    return (
        <div className="chart-container ScoreChart">
            <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={scoreData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {scoreData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </ResponsiveContainer>
        </div>
    );
}

export default ScoreChart;