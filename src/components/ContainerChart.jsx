import React, { useEffect }  from "react";
import { useStore } from "./Store";
import { changeUserId } from "./Store";
import PerformanceChart from './performanceChart.jsx';
import ScoreChart from './ScoreChart.jsx';
import ActivityChart from './ActivityChart.jsx';
import SessionChart from './SessionChart.jsx';
import NutritionStats from "./NutritionStats.jsx";

export const CustomTooltip = ({ active, payload}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`Durée : ${payload[0].value} minutes`}</p>
      </div>
    );
  }

  return null;
};


const ContainerChart = () => {
  const { state, dispatch } = useStore();
  const userId = 18;

  useEffect(() => {
    // Récupère les données lorsque le composant est monté ou que le userId change
    changeUserId(dispatch, userId);
  }, [dispatch, userId]); 

  return (
    <div className="ContainerChart">
  <div className="main-charts-section">
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}
      {!state.loading && !state.error && state.userData && (
        <div>
          {state.userData.id && <ActivityChart data={state.activity} />}
          <div className="detailed-metrics-charts">
            {state.averageSessions && <SessionChart data={state.averageSessions} />}
            {state.performance && <PerformanceChart data={state.performance} />}
            {state.score && <ScoreChart data={state.score} />}
          </div>
          {state.userData && <NutritionStats data={state.userData} />}
        </div>
    )}
  </div>
</div>
  );
};


export default ContainerChart;
