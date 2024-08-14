import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
  } from "recharts";
import React, { useState, useEffect }  from 'react';  
import { 
    userMainData, 
  } from '../mockData.js';
  import { formatUserMainData } from '../utils/dataFormatters';

const COLORS = ['#FFFFFF', '#E60000'];

const ScoreChart = ({ data }) => {

  if (!data) {
    return <div>Aucune donnée disponible pour cet utilisateur.</div>;
  }

  const score = data.todayScore;
  const scorePercentage = Math.round(score * 100);

    return (
        <div className="chart-container ScoreChart">
          <div>
            <h2>Score</h2>
          </div>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={[{ value: score }, { value: 1 - score }]}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              innerRadius={90}
              outerRadius={100}
              fill="#E60000"
              dataKey="value"
            >
              <Cell fill={COLORS[0]} />
              <Cell fill={COLORS[1]} />
            </Pie>
            <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: '26px', fontWeight: 'bold' }}
          >
            {`${scorePercentage}%`}
          </text>
          <text
            x="50%"
            y="60%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: '16px' }}
          >
            de votre
          </text>
          <text
            x="50%"
            y="70%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: '16px' }}
          >
            objectif
          </text>
          </PieChart>
        </ResponsiveContainer>
        </div>
    );
}

export default ScoreChart;