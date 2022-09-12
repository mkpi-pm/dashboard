import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection } from '@syncfusion/ej2-react-charts';

import { PyramidData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const Pyramid = () => {
  const { currentMode } = useStateContext();

  return (
    // CardBlank
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">

      {/* Header */}
      <Header category="Chart" title="Pyramid" />

      <div className="w-full">

        {/* AccumulationChartComponent & props*/}
        <AccumulationChartComponent
          id='pyramid-chart'
          title='FOOD COMPARISON CHART'
          legendSettings={{
            background: 'white',
            opacity: 0.5,
            position: "Bottom" }}
          tooltip={{ enable: true, format: '${point.x} : <b>${point.y} cal</b>' }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          chartArea={{ background: "white", opacity: 0.2 }}
        >
          {/* Functionality */}
          <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationSelection]}/>

          {/* Data */}
          <AccumulationSeriesCollectionDirective>

            <AccumulationSeriesDirective
              name='Food'
              dataSource={PyramidData}
              xName='x'
              yName='y'
              type='Pyramid'
              width='45%'
              height='80%'
              neckWidth='15%'
              gapRatio={0.03}
              explode={true}
              emptyPointSettings={{ mode: 'Drop', fill: 'red' }} dataLabel={{
                visible: true,
                position: 'Inside',
                name: 'text',
              }}
            >
            </AccumulationSeriesDirective>

          </AccumulationSeriesCollectionDirective>

        </AccumulationChartComponent>

      </div>

    </div>

  );
    
}

export default Pyramid;