import React from "react";  
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
  } from "recharts";

import { 
    performanceData, 
  } from '../mockData.js';

const PerformanceChart = () => {
    return (
        <div className="chart-container PerformanceChart">
            <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={performanceData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <Radar name="Mike" dataKey="A" stroke="#d92121" fill="#d92121" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PerformanceChart;