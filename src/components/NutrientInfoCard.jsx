import React from 'react';

const NutrientInfoCard = ({ type, amount }) => {
  return (
    <div className="nutrient-card">
      <h3>{amount}</h3>
      <p>{type}</p>
    </div>
  );
};

export default NutrientInfoCard;
