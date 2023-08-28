import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GraphContainer from './GraphContainer/GraphContainer';
import Navbar from './Navbar/Navbar';
import './App.css'

const App = () => {
  const [resetCounters, setResetCounters] = useState([0, 0, 0, 0]);
  const [selectedPoints, setSelectedPoints] = useState([]); // Create the state for selected points

  const handleReset = (graphIndex) => {
    const updatedCounters = [...resetCounters];
    updatedCounters[graphIndex] += 1;
    setResetCounters(updatedCounters);
  };
  return (
    <div className="animated-background">
      <Navbar onResetClick={handleReset} />
      <div className="container">
        <div className="d-flex flex-wrap">
          <div className="col-md-6 mb-2" style={{ display: 'flex', justifyContent: 'space-around' }}>

            <div className="p-3">
              {/* Pass selectedPoints and setSelectedPoints to GraphContainer */}
              <GraphContainer selectedPoints={selectedPoints} setSelectedPoints={setSelectedPoints} resetCounter={resetCounters[0]} graphIndex={0} />
            </div>
          </div>
          <div className="col-md-6 mb-2 " style={{ display: 'flex', justifyContent: 'space-around' }}>

            <div className="p-3">
              <GraphContainer selectedPoints={selectedPoints} setSelectedPoints={setSelectedPoints} resetCounter={resetCounters[1]} graphIndex={1} />
            </div>
          </div>
          <div className="col-md-6 mb-2 " style={{ display: 'flex', justifyContent: 'space-around' }}>

            <div className="p-3">
              <GraphContainer selectedPoints={selectedPoints} setSelectedPoints={setSelectedPoints} resetCounter={resetCounters[2]} graphIndex={2} />
            </div>
          </div>
          <div className="col-md-6 mb-2" style={{ display: 'flex', justifyContent: 'space-around' }}>

            <div className="p-3">
              <GraphContainer selectedPoints={selectedPoints} setSelectedPoints={setSelectedPoints} resetCounter={resetCounters[3]} graphIndex={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;