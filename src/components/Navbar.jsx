import React from 'react';

const Navbar = () => {
    return (
      <div className="app-container">
        <nav className="top-navbar">
          <div className="logo">
            <img src="/path-to-your-logo.png" alt="SportSee" className="logo-image" />
            <span className="logo-text">SportSee</span>
          </div>
          <div className="nav-links">
            <a href="#" className="nav-link">Accueil</a>
            <a href="#" className="nav-link">Profil</a>
            <a href="#" className="nav-link">Réglage</a>
            <a href="#" className="nav-link">Communauté</a>
          </div>
        </nav>
  
        <div className="main-content">
        <nav className="side-navbar">
          <a href="#" className="icon-link">
            <img src="/path-to-yoga-icon.png" alt="Yoga" className="nav-icon" />
          </a>
          <a href="#" className="icon-link">
            <img src="/path-to-swimming-icon.png" alt="Swimming" className="nav-icon" />
          </a>
          <a href="#" className="icon-link">
            <img src="/path-to-cycling-icon.png" alt="Cycling" className="nav-icon" />
          </a>
          <a href="#" className="icon-link">
            <img src="/path-to-weightlifting-icon.png" alt="Weightlifting" className="nav-icon" />
          </a>
        </nav>
  
          <main className="content">
            {/* Your main content goes here */}
          </main>
        </div>
  
        <footer className="footer">
          Copyright SportSee 2020
        </footer>

        <style jsx>{`
        .app-container {
          display: flex;
          flex-direction: column;
          height: 100vh;
          font-family: Arial, sans-serif;
        }

        .top-navbar {
          background-color: black;
          color: white;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
        }

        .logo-image {
          height: 2rem;
          width: 2rem;
          margin-right: 0.5rem;
        }

        .logo-text {
          color: red;
          font-weight: bold;
        }

        .nav-links {
          display: flex;
          gap: 1rem;
        }

        .nav-link {
          color: white;
          text-decoration: none;
        }

        .nav-link:hover {
          color: #cccccc;
        }

        .main-content {
          display: flex;
          flex: 1;
        }

        .side-navbar {
          background-color: black;
          width: 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem 0;
        }

        .icon-link {
          margin-bottom: 2rem;
        }

        .nav-icon {
          width: 2rem;
          height: 2rem;
        }

        .content {
          flex: 1;
          padding: 1rem;
        }

        .footer {
          background-color: black;
          color: white;
          text-align: center;
          padding: 0.5rem;
          font-size: 0.75rem;
        }
      `}</style>
    </div>
  );
};

export default Navbar;