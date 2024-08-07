import React,  { useState, useEffect } from "react";  
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
  } from "recharts";

import { 
    USER_PERFORMANCE, 
  } from '../mockData.js';
import { formatUserPerformance } from "../utils/dataFormatters.js";


const PerformanceChart = ({ userId }) => {
    const [formattedPerformanceData, setFormattedPerformanceData] = useState([]);
  
    useEffect(() => {
      const formattedData = formatUserPerformance(USER_PERFORMANCE, userId);
      setFormattedPerformanceData(formattedData);
    }, [userId]);

    return (
        <div className="chart-container PerformanceChart">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={formattedPerformanceData} margin={{ top: 30, right: 35, bottom: 30, left: 35 }}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" tick={{ fontSize: 12, fill: '#FFFF' }} />
                    <Radar name="Mike" dataKey="value" stroke="#d92121" fill="#d92121" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PerformanceChart;