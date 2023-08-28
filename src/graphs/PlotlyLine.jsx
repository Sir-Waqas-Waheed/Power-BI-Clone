// PlotlyLine.jsx
import React from "react";
import Plot from "react-plotly.js";

function PlotlyLine({ onSelected }) {
  return (
    <Plot
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: "scatter", // Use scatter for line chart
          mode: "lines",
          marker: { color: "blue" },
        },
      ]}
      layout={{ width: 320, height: 240, title: "Here is your Graph" }}
      onSelected={onSelected} // Pass the onSelected prop
    />
  );
}

export default PlotlyLine;
