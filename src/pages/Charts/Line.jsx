import React from 'react';

import { Header, LineChart } from "../../components";

const Line = () => {
  return (
        // CardBlank
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">

          {/* Header */}
          <Header category="Line" title="Inflation Rate" />
  
          {/* content */}
          <div className="text-w-full">
            <LineChart />
          </div>

        </div>
        
  )
}

export default Line;