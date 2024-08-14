import {
    Line,
    XAxis,
    Tooltip,
    LineChart,
    ResponsiveContainer,
  } from "recharts";

  import { 
    CustomTooltip
  } from './ContainerChart.jsx';

const SessionChart =  ({data}) => {



    return (
        <div className="chart-container SessionChart">
            <h2 style={{ marginBottom: '20px' }}>Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="day" stroke="#FFFFFF" tickLine={false} axisLine={false}  />
          <Tooltip content={<CustomTooltip />} />
          <Line type="natural" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} dot={false} activeDot={{ r: 8, fill: 'white', stroke: 'rgba(255, 255, 255, 0.3)', strokeWidth: 10 }}/>
        </LineChart>
      </ResponsiveContainer>
        </div>
    );
}

export default SessionChart;