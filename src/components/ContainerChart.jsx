import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  BarChart,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 300, pv: 3300, amt: 5400 },
  { name: "Page C", uv: 900, pv: 4300, amt: 5400 },
];

const ContainerChart = () => {
  return (
    <div className="ContainerChart">
      <div className="Left_part">
        <div className="Long_Top">
          <LineChart width={400} height={400} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          </LineChart>
        </div>
        <div className="Triple_bottom">
          {[1, 2, 3].map((_, index) => (
            <ResponsiveContainer key={index} width="100%" height={100}>
              <BarChart data={data}>
                <Bar dataKey="uv" fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
              </BarChart>
            </ResponsiveContainer>
          ))}
        </div>
      </div>
      <div className="Quad_Right">
        <p>Quad right</p>
        <p>Quad right</p>
        <p>Quad right</p>
        <p>Quad right</p>
      </div>
    </div>
  );
};

export default ContainerChart;
