import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="dashboard">
      <h1 className="dashboard-title">Bonjour <span className="highlight">Thomas</span></h1>
      <p className="dashboard-subtitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>    
    </header>
  );
};

export default Header;
