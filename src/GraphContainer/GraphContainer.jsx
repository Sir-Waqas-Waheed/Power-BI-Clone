import React, { useState, useEffect } from "react";
import Data from "../Data";
import PlotlyBar from "../graphs/PlotlyBar";
import PlotlyLine from "../graphs/PlotlyLine";
import PlotlyPie from "../graphs/PlotlyPie";

const GraphContainer = ({ selectedPoints, setSelectedPoints, resetCounter, graphIndex }) => {
  const [selectedChart, setSelectedChart] = useState(null);

  const handleChartSelect = (chartType) => {
    setSelectedChart(chartType);
  };

  const handleReset = () => {
    setSelectedChart(null);
    setSelectedPoints([]); // Clear selected points when resetting
  };

  const UserData = Data.getChartData();

  useEffect(() => {
    setSelectedChart(null);
    setSelectedPoints([]); // Clear selected points when resetCounter changes
  }, [resetCounter]);

  // Handle Plotly event when points are selected
  const handlePointsSelected = (event) => {
    console.log("Selected Points:", event.points);
    setSelectedPoints([...selectedPoints, ...event.points.map((p) => (p.pointIndex))]); // Merge new selected points with existing
  };

  return (
    <div className="graph-container">
      <div className="buttons-container">
        <button onClick={() => handleChartSelect("bar")} className="animated-button">
          Bar Chart
        </button>
        <button onClick={() => handleChartSelect("line")} className="animated-button">
          Line Chart
        </button>
        <button onClick={() => handleChartSelect("pie")} className="animated-button">
          Pie Chart
        </button>
        <button onClick={handleReset} className="btn btn-danger ml-3 animated-button">
          Reset
        </button>
      </div>
      {selectedChart === "bar" && <PlotlyBar selectedPoints={selectedPoints} onSelected={handlePointsSelected} />}
      {selectedChart === "line" && <PlotlyLine selectedPoints={selectedPoints} onSelected={handlePointsSelected} />}
      {selectedChart === "pie" && <PlotlyPie selectedPoints={selectedPoints} onSelected={handlePointsSelected} />}
    </div>
  );
};

export default GraphContainer;
