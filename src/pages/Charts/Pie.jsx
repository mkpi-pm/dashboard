import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';

import { pieChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const Pie = () => {
  const { currentMode } = useStateContext();

  return (
    // CardBlank
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">

    {/* Header */}
    <Header category="Pie" title="Project Cost Breakdown" />

        {/* AccumulationChartComponent & props*/}
        <AccumulationChartComponent
          id="charts"
          height="420px"
          legendSettings={{
            visible: true,
            background: 'white',
            position: "Bottom",
          }}
          enableSmartLabels={true}
          enableAnimation={true}
          enableRotation={true}
          center={{ x: '50%', y: '50%' }}
          tooltip={{ enable: true }}
          background={ currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          {/* Functionality */}
          <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />

          {/* Data */}
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={pieChartData}
              name='Cost'
              xName='x'
              yName='y'
              explode={true}
              explodeOffset='20%'
              explodeIndex={2}
              dataLabel={{
                visible: true,
                position: 'Inside',
                name: 'text',
                font: {
                  fontWeight: '600',
                  size: '17px',
                  color: '#fff'
                }
              }} 
              radius='70%'>
            </AccumulationSeriesDirective>

          </AccumulationSeriesCollectionDirective>

        </AccumulationChartComponent>

    </div>
  )
}

export default Pie;