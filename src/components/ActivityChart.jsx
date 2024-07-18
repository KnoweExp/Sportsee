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
    activityDataFalse, 
  } from '../mockData.js';

const ActivityChart = () => {
    return (
    <div className="ActivityChart">
    <ResponsiveContainer width="100%" height="100%">
  <LineChart width={300} height={100} data={activityDataFalse}>
    <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
  </LineChart>
</ResponsiveContainer>
    </div>
    )
}
export default ActivityChart;