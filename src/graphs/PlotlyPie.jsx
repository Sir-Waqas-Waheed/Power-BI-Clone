// PlotlyPie.jsx
import React from "react";
import Plot from "react-plotly.js";

function PlotlyPie({ onSelected }) {
  return (
    <Plot
      data={[
        {
          values: [50, 25, 25],
          type: "pie",
          marker: { color: "green" },
        },
      ]}
      layout={{ width: 320, height: 240, title: "Here is your Graph" }}
      onSelected={onSelected} // Pass the onSelected prop
    />
  );
}

export default PlotlyPie;
