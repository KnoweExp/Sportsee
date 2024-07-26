import React from "react";  
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    BarChart,
    Bar,
    ResponsiveContainer,
  } from "recharts";

import { 
    activityData
  } from '../mockData.js';

const ActivityChart = () => {
    return (
    <div className="ActivityChart">
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={activityData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false}/>
          <XAxis dataKey="day" />
          <YAxis yAxisId="right" orientation="right" stroke="#8884d8" />
          <YAxis 
          yAxisId="left" 
          orientation="left" 
          tickFormatter={(value) => ``}
        />
          <Tooltip />
          <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" />
          <Bar yAxisId="left" dataKey="calories" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    )
}
export default ActivityChart;