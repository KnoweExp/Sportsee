import React, { useEffect, useState }from "react";  
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

  import { activityData, averageSessionsData, performanceData, mainData } from '../mockData';

  const ActivityChart = ({ userId }) => {
    const [activityData, setActivityData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) {
      setError("userId is undefined");
      console.error("userId is undefined");
      return;
    }

    fetch(`http://localhost:3000/user/${userId}/activity`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (!data.data.sessions) {
          throw new Error("No sessions data found");
        }
        setActivityData(data.data.sessions);
      })
      .catch(error => {
        setError(error.message);
        console.error('Error fetching user activity:', error);
      });
  }, [userId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

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