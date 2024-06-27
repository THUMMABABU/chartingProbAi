import React, { useState, useEffect } from 'react';

import Chart from './components/Chart';
import TimeframeSelector from './components/TimeframeSelector';
import './styles/styles.css';
import data from './data/data.json';


const App = () => {
  const [timeframe, setTimeframe] = useState('daily');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(data);      // Implement your filtering logic here
  }, [timeframe]);
  

  return (
    <div className="chart-container">
      <TimeframeSelector onSelect={setTimeframe} />
      <Chart data={filteredData} />
    </div>
  );
};

export default App;