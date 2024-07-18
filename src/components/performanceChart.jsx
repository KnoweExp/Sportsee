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
    performanceData, 
  } from '../mockData.js';

const PerformanceChart = () => {
    return (
        <div className="chart-container PerformanceChart">
            <ResponsiveContainer width="100%" height={300}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performanceData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar name="Mike" dataKey="A" stroke="#d92121" fill="#d92121" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PerformanceChart;