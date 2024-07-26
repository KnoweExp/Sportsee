import React from 'react';

const SidebarNav = () => {
  const navStyle = {
    position: 'fixed',
    left: 0,
    top: 0,
    height: '100%',
    width: '64px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <nav style={navStyle}>
      <NavItem icon="⚡" />
      <NavItem icon="🏊" />
      <NavItem icon="🚴" />
      <NavItem icon="🏋️" />
    </nav>
  );
};

const NavItem = ({ icon }) => {
  const buttonStyle = {
    width: '48px',
    height: '48px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
    fontSize: '24px',
    margin: '8px 0',
    transition: 'background-color 0.3s',
  };

  return (
    <button 
      style={buttonStyle}
      onMouseEnter={(e) => e.target.style.backgroundColor = '#e0e0e0'}
      onMouseLeave={(e) => e.target.style.backgroundColor = '#f0f0f0'}
    >
      {icon}
    </button>
  );
};

export default SidebarNav;