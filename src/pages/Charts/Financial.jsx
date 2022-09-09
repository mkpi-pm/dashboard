import React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair, Legend } from '@syncfusion/ej2-react-charts';

import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const date1 = new Date('2017, 1, 1');

function filterValue(value) {
  if (value.x >= date1) {
    return value.x, value.high, value.low;
  }
}

const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
  const { currentMode } = useStateContext();

  return (
    // CardBlank
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">

      {/* Header */}
      <Header category="Chart" title="Financial" />

      <div className="w-full">

        {/* ChartComponent & props*/}
        <ChartComponent
          id='charts'
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          background={ currentMode === "Dark" ? "#33373E" : "#fff"}
          tooltip={{ enable: true, shared: true }}
          crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
          legendSettings={{ background: 'white', opacity: 0.5 }}
          title="AAPL HISTORICAL"
        >
          {/* Functionality */}
          <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom, Legend]}/>
          
          {/* Data */}
          <SeriesCollectionDirective>

            <SeriesDirective
              dataSource={returnValue}
              xName='x'
              yName='low'
              name='Apple Inc'
              type='Hilo'
              low='low'
              high='high'
              // fill= 'currentMode'
            >
            </SeriesDirective>

            </SeriesCollectionDirective>
            
          </ChartComponent>
            
      </div>

    </div>

  );

}

export default Financial;