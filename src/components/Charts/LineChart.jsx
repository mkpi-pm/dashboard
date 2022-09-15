import React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from "@syncfusion/ej2-react-charts";

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const LineChart = () => {
  const { currentMode } = useStateContext();

  return (
      // ChartComponent & props
      <ChartComponent
        id="line-chart"
        height="420px"
        primaryXAxis={LinePrimaryXAxis}
        primaryYAxis={LinePrimaryYAxis}
        chartArea={{ border: { width: 0 }, background: "white", opacity: 0.2 }}
        tooltip={{ enable: true }}
        background={ currentMode === "Dark" ? "#33373E" : "#fff"}
        legendSettings={{ background: "white", opacity: 0.5 }}
      >
        {/* Functionality */}
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
        
        {/* Data */}
        <SeriesCollectionDirective>
          {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
        
      </ChartComponent>

  )
  
}

export default LineChart;