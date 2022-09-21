import React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from "@syncfusion/ej2-react-charts";

import { barPrimaryXAxis, barPrimaryYAxis, barCustomSeries } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { ChartsHeader } from "../../components";

const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    // CardBlank
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">

      {/* Header */}
      <ChartsHeader category="Bar" title="Olympic Medal Count in Rio" />

      {/* Chart Card */}
      <div className=" w-full">

        {/* ChartComponent & props*/}
        <ChartComponent
          id="charts"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={ currentMode === "Dark" ? "#2E4485" : "#fff"}
          legendSettings={{ background: "white", opacity: 0.5 }}
        >
          {/* Functionality */}
          <Inject services={[ColumnSeries, DataLabel, Legend, Tooltip, Category]} />
          
          {/* Data */}
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>

        </ChartComponent>

      </div>

    </div>

  )

}

export default Bar;