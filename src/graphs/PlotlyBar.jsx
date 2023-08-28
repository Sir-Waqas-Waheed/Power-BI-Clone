// PlotlyBar.jsx
import React from "react";
import Plot from "react-plotly.js";

function PlotlyBar({ onSelected, selectedpoints }) {
  return (
    <Plot
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          selectedpoints: selectedpoints,
          type: "bar",
          marker: { color: "red" },
        },
      ]}
      layout={{ width: 320, height: 240, title: "Here is your Graph" }}
      onSelected={onSelected} // Pass the onSelected prop
    />
  );
}

export default PlotlyBar;
