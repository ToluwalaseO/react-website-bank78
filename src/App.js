import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo1">
          <img src="/logo.png" alt="My Image" />
        </div>
        <div className="logo">Stellar</div>
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#about">About us</a>
          <a href="#contact">Contact us</a>
          <button className="get-free-btn">Get it for free</button>
        </nav>
      </header>

      <main className="main-content">
        <section className="hero">
          <h1>Transforming</h1>
          <h1>financial services with</h1>
          <h1>innovations</h1>
          <div className="powered">
            <h2>Powered by</h2>
            <p>AI</p>
          </div>
          <div className="stats">
            <div className="stat">
              <h2>77%</h2>
              <p>of users report improved financial health</p>
            </div>
            <div className="stat">
              <h2>95%</h2>
              <p>of users report improved financial health</p>
            </div>
          </div>
          <div className="button2">
            <button className="get-free-btn2">Get it for free</button>
          </div>
        </section>

        <section className="widgets">
          <div className="Aimage">
            <img src="/rename.png" alt="AI Image" />
          </div>
          <div className="widget">
            <h3>AI - Assistant</h3>
            <div className="widget-icon">🔵</div>
          </div>
          <div className="bitcoin">
            <h3>Ethereum</h3>
            <p>$3,502.73</p>
            <div className="chart">📈</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
