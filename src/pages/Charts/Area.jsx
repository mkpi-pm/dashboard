import React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip, SplineAreaSeries } from "@syncfusion/ej2-react-charts";

import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { ChartsHeader } from "../../components";

const Area = () => {
  const { currentMode } = useStateContext();

  return (
    // CardBlank
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">

      {/* Header */}
      <ChartsHeader category="Area" title="Inflation Rate in percantage" />

      {/* Chart Card */}
      <div className=" w-full">

        {/* ChartComponent & props*/}
        <ChartComponent
          id="charts"
          height="420px"
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          background={ currentMode === "Dark" ? "#2E4485" : "#fff"}
          legendSettings={{ background: 'white', opacity: 0.5 }}
          tooltip={{ enable: true }}
        >
          {/* Functionality */}
          <Inject services={[SplineAreaSeries, DateTime, Legend, Tooltip]} />
          
          {/* Data */}
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>

        </ChartComponent>

      </div>

    </div>
    
  )
  
}

export default Area;