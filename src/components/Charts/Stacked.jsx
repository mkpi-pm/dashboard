import React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from "@syncfusion/ej2-react-charts";

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Stacked = ({ width, height }) => {
  const { currentMode } = useStateContext();

  return (

      // ChartComponent & props
      <ChartComponent
        id="charts"
        animation={{ enable: true }}
        width={width}
        height={height}
        primaryXAxis={stackedPrimaryXAxis}
        primaryYAxis={stackedPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true, shared: true }}
        background={ currentMode === "Dark" ? "#2E4485" : "#fff" }
        legendSettings={{ background: "white", opacity: 0.5}}
      >
        {/* Functionality */}
        <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
        
        {/* Data */}
        <SeriesCollectionDirective>
          {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>

      </ChartComponent>

  )

}

export default Stacked;