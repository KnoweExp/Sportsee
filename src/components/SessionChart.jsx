import {
    Line,
    XAxis,
    Tooltip,
    LineChart,
    ResponsiveContainer,
  } from "recharts";
import React from 'react';  
import { 
    sessionData, 
  } from '../mockData.js';

  import { 
    CustomTooltip
  } from './ContainerChart.jsx';

const SessionChart = () => {
    return (
        <div className="chart-container SessionChart">
            <h2>Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height={300}>
        <LineChart data={sessionData}>
          <XAxis dataKey="day" />
          <Tooltip content={<CustomTooltip />} />
          <Tooltip
                formatter={(value) => `${value} minutes`}
                labelFormatter={() => ''}
              />
          <Line type="monotone" dataKey="duration" stroke="#FFFFFF" />
        </LineChart>
      </ResponsiveContainer>
        </div>
    );
}

export default SessionChart;