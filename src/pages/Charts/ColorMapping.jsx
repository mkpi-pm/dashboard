import React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, DataLabel, Tooltip, Legend, RangeColorSettingsDirective, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';

import { colorMappingData, rangeColorMapping, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const ColorMapping = () => {
  const { currentMode } = useStateContext();

  return (
      // CardBlank
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">

      {/* Header */}
      <Header category="Chart" title="ColorMapping" />

      <div className="w-full">

        {/* ChartComponent & props*/}
        <ChartComponent
          id='charts'
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ mode: 'Range', background: 'white', opacity: 0.5 }}
          tooltip={{ enable: true }}
          style={{ textAlign: "center" }}
          title="USA CLIMATE - WEATHER BY MONTH"
        >
          {/* Functionality */}
          <Inject services={[ColumnSeries, DataLabel, Tooltip, Category, Legend]}/> 

          {/* Data */}
          <SeriesCollectionDirective>

            <SeriesDirective
              dataSource={colorMappingData[0]}
              name='USA'
              xName='x'
              yName='y'
              type='Column'
              animation={{ enable: false }}
              cornerRadius={{
                topLeft: 10,
                topRight: 10 }}
              
              marker={{ dataLabel: { visible: true, position: "Outer" } }}
            >
            </SeriesDirective>

          </SeriesCollectionDirective>

          <RangeColorSettingsDirective>
                
            {rangeColorMapping.map((item, index) => <RangeColorSettingDirective key={index} {...item} />)}
                            
          </RangeColorSettingsDirective>

        </ChartComponent>

      </div>

    </div>

  );
    
}

export default ColorMapping;