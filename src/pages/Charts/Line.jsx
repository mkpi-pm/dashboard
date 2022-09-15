import React from "react";

import { ChartsHeader, LineChart } from "../../components";

const Line = () => (
    
  // CardBlank
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">

    {/* Header */}
    <ChartsHeader category="Line" title="Inflation Rate" />
      
    {/* Chart Card */}
    <div className="text-w-full">

      <LineChart />

    </div>

  </div>
        
)

export default Line;