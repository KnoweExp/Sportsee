import {
    Line,
    XAxis,
    Tooltip,
    LineChart,
    ResponsiveContainer,
  } from "recharts";
import React, { useEffect, useState } from 'react';  
import { 
    sessionData, 
  } from '../mockData.js';

  import { 
    CustomTooltip
  } from './ContainerChart.jsx';
  import { formatUserAverageSessions } from '../utils/dataFormatters';

const SessionChart =  ({userId}) => {
  const [formattedSessionData, setFormattedSessionData] = useState([]);

  useEffect(() => {
    const formattedData = formatUserAverageSessions(sessionData, userId);
    setFormattedSessionData(formattedData);
  }, [userId]);

  if (formattedSessionData.length === 0) {
    return <div>Aucune donnée de session disponible pour cet utilisateur.</div>;
  }

    return (
        <div className="chart-container SessionChart">
            <h2 style={{ marginBottom: '20px' }}>Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height={200}>
        <LineChart data={formattedSessionData}>
          <XAxis dataKey="day" stroke="#FFFFFF" tickLine={false} axisLine={false}  />
          <Tooltip content={<CustomTooltip />} />
          <Line type="natural" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} dot={false} activeDot={{ r: 8, fill: 'white', stroke: 'rgba(255, 255, 255, 0.3)', strokeWidth: 10 }}/>
        </LineChart>
      </ResponsiveContainer>
        </div>
    );
}

export default SessionChart;