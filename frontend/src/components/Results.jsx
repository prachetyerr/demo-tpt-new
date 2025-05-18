import React from "react";
import "./Results.css";

const Results = ({ results }) => {
  if (!results) return null;

  const { seo, ai_suggestions } = results;

const getColorFromPercentage = (percentage) => {
  if (percentage <= 15) return "#8B0000";        // dark red
  if (percentage <= 35) return "#FF0000";        // red
  if (percentage <= 50) return "#FF4500";        // red-orange
  if (percentage <= 65) return "#FFD700";        // yellow
  if (percentage <= 80) return "#90EE90";        // light green
  if (percentage <= 90) return "#008000";        // green
  return "#006400";                              // dark green
};


const renderBar = (value, max, label) => {
  const percentage = Math.min((value / max) * 100, 100);
  const color = getColorFromPercentage(percentage);

  return (
    <div className="metric">
      <div className="metric-header">
        <strong>{label}:</strong> {value}
      </div>
      <div className="bar-container">
        <div
          className="bar-fill"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
    
  );

};

const barLegend = () => {
  return (
    <div className="color-legend">
  <h3><u>Colour Legend</u></h3>
  <div className="legend-row">
    <span className="legend-box" style={{ backgroundColor: "#8B0000" }}></span> 0–15% (Very Poor)
    <span className="legend-box" style={{ backgroundColor: "#FF0000" }}></span> 15–35% (Poor)
    <span className="legend-box" style={{ backgroundColor: "#FF4500" }}></span> 35–50% (Below Average)
    <span className="legend-box" style={{ backgroundColor: "#FFD700" }}></span> 50–65% (Average)
    <span className="legend-box" style={{ backgroundColor: "#90EE90" }}></span> 65–80% (Good)
    <span className="legend-box" style={{ backgroundColor: "#008000" }}></span> 80–90% (Very Good)
    <span className="legend-box" style={{ backgroundColor: "#006400" }}></span> 90–100% (Excellent)
  </div>
</div>
  );
};

  return (
    <div className="results">
      <h2>SEO Analysis</h2>
      <div className="metrics-container">
        <div><strong>Word Count:</strong> {seo.word_count}</div>
        <div><strong>Keyword Count:</strong> {seo.keyword_count}</div>

        {renderBar(seo.keyword_density, 5, "Keyword Density (%)")}
        {renderBar(parseFloat(seo.readability).toFixed(2), 100, "Readability Score")}
        {renderBar(seo.sentence_count, 20, "Sentence Count")}

      </div>
      <div>
        {barLegend()}
      </div>

      <h2>AI Suggestions</h2>
      <div className="ai-suggestions">
        {ai_suggestions.split("\n").map((line, idx) => (
          <div key={idx} className="suggestion-point">🔹 {line.trim()}</div>
        ))}
      </div>
    </div>
  );
};

export default Results;
