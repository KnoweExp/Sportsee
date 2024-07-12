import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Bar, BarChart,ResponsiveContainer  } from 'recharts';

const data = [
  {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
];

const ContainerChart = () => {
  return (
    <div className="ContainerChart">
      <div className='Left_part'>
      <div className='Long_Top'>
          <ResponsiveContainer width={400} height={300}>
            <LineChart data={data}>
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className='Triple_bottom'>
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
      <div className='Quad_Right'>
        <p>Quad right</p>
        <p>Quad right</p>
        <p>Quad right</p>
        <p>Quad right</p>
      </div>
    </div>
  );
};

export default ContainerChart;
