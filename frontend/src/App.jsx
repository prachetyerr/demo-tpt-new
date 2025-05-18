import React, { useState, useEffect } from "react";
import SeoForm from "./components/SeoForm";
import Results from "./components/Results";
import "./App.css";

const App = () => {
  const [results, setResults] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  return (
    <div>
      <div className={`App ${darkMode ? "dark" : ""}`}>
        <div className="header">
          <h1>AI-powered SEOptimizer (Demo for TPointTech)</h1>
          <button className="toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
        <SeoForm setResults={setResults} />
        <Results results={results} />
      </div>
      <div className="footer">
        <h5>Copyright 2025. Made by <b>Prachet Yerramalla</b> from Pyrosynergy AI Labs. For demo purposes only.</h5>
      </div>
    </div>
  );
};


export default App;
