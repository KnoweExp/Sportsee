import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
  } from "recharts";
import React from 'react';  
import { 
    scoreData, 
  } from '../mockData.js';

  const COLORS = ['#FFFFFF', '#E60000'];

const ScoreChart = () => {
    return (
        <div className="chart-container ScoreChart">
          <div>
            <h2>Score</h2>
          </div>
          <p>objectif</p>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={scoreData}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              innerRadius={60}
              outerRadius={80}
              fill="#E60000"
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