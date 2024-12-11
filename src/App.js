import React from "react";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo1">
          <img src="/logo.png" alt="My Image" />
        </div>
        <div className="logo">Stellar</div>
        <nav className="nav">
          <a href="#services">Services <i class="fas fa-chevron-down"></i></a>
          <a href="#about">About us</a>
          <a href="#contact">Contact us</a>
          <button className="get-free-btn">Get it for free</button>
        </nav>
      </header>

      <main className="main-content">
        
        <section className="hero">
       
        <div className="whole">
          <h1>Transforming</h1>
          <h1>financial services with</h1>
          <h1>innovation ∞</h1>

          <div className="powered">
            <h2>Powered by</h2>
            <div className="Aiptag">
             AI
            </div> 
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
          </div>
         
        </section>
        

        <section className="widgets">
          <div className="Aimage">
            <img src="/rename.jpg" alt="AI Image" />
          </div>
          <div className="bitcoin">
          <div className="imageer">
          <img src="/image.jpg" alt="bitcoin" />
        </div>
          </div>
        </section>
        <div className="widget">
           <div className="jim">
           <h3>AI - Assistant</h3>
           </div>
            <div className="mj">
            <h4>🔵</h4>
            </div>
            <section className="features">
          <div className="feature-card1">
            <div className="init"><i className="fa fa-university" style={{ fontSize: "18px", padding:"8px" }}></i>Digital Banking</div>
          </div>
          <div className="feature-card2">
            
            <div className="init2"><i className="fa fa-link" style={{ fontSize: "18px", padding:"8px" }}></i>Seamless Integration</div>
          </div>
        </section>
          </div>
      </main>
    </div>
  );
};

export default App;