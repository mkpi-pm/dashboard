import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

import { Stacked, Doughnut, Button, SparkLine, LineChart } from "../components";
import { earningData, SparklineAreaData, ecomPieChartData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    // CardBlank
    <div className="mt-24">
      
      {/* Earnings Block */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center">

        {/* Earnings Content */}
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
                       h-44 rounded-xl w-full lg:w-80 p-8 pl-4 pt-4 m-3 bg-hero-pattern
                       bg-no-repeat bg-cover bg-center"
        >

          {/* Earnings */}
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
          </div>

          {/* Earnings Download Button */}
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>

        </div>

        {/* Customers Products Sales Refunds */}
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          
          {/* content */}
          {earningData.map((item) => (
            <div 
              key={item.title}
              className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              {/* content icons */}
              <button
                type="button"
                style={{color: item.iconColor, backgroundColor: item.iconBg}}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              
              <p className="mt-3">

                {/* content amounts */}
                <span className="text-lg font-semibold">
                  {item.amount}
                </span>

                {/* content percentages */}
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
                
              </p>

              {/* content titles */}
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>

            </div>

          ))}
          
        </div>
        
      </div>

      {/* Revenue Block */}
      <div className="flex gap-1 flex-wrap justify-center">

        {/* Revenue Content */}
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-800"
        >
          {/* Revenue First Line */}
          <div className="flex justify-between">
            <p className="font-semibold text-xl text-gray-400">Revenue Updates</p>

            {/* Dot Expense & Budget Card */}
            <div className="flex items-center gap-4">

              {/* Dot Expense */}
              <p className="flex items-center gap-2 text-lg text-gray-400 hover:drop-shadow-xl">
                <span><GoPrimitiveDot /></span>
                <span>Expense</span>
              </p>

              {/* Dot Budget */}
              <p className="flex items-center gap-2 text-lg text-green-400 hover:drop-shadow-xl">
                <span><GoPrimitiveDot /></span>
                <span>Budget</span>
              </p>

            </div>

          </div>

          {/* Revenue below the First Line */}
          <div className="mt-10 flex gap-10 flex-wrap justify-center">

            {/* Budget Expense Chart Button Card */}
            <div className="border-r-1 border-color m-4 pr-10">

              {/* Budget & Numbers */}
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer
                                  rounded-full text-white bg-green-400 ml-3 text-xs"
                  >23%</span>
                </p>
                <p className="text-gray-400 mt-1">Budget</p>
              </div>

              {/* Expense & Numbers */}
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$48,438</span>
                </p>
                <p className="text-gray-400 mt-1">Expense</p>
              </div>

              {/* SparkLine chart */}
              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>

              {/* Download Report Button */}
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>

            </div>

            {/* Stacked Component */}
            <div>
              <Stacked currentMode={currentMode} width="320px" height="360px" />
            </div>

          </div>

        </div>

        {/* Monthly Revenue & Yearly Sales Block */}
        <div>

          {/* Monthly Revenue Card */}
          <div
            className=" rounded-2xl md:w-400 p-4 m-3"
            style={{ backgroundColor: currentColor }}
          >
            {/* Earnings / Number / Monthly Revenue line */}
            <div className="flex justify-between items-center ">

              {/* Earnings */}
              <p className="font-semibold text-gray-200 text-2xl">Earnings</p>

              <div>
                {/* Number */}
                <p className="text-2xl text-white font-semibold mt-8">$63,448.78</p>

                {/* Monthly Revenue */}
                <p className="text-gray-200">Monthly revenue</p>

              </div>

            </div>

            {/* Chart */}
            <div className="mt-4">

              {/* SparkLine Component & props */}
              <SparkLine
                currentColor={currentColor}
                id="column-sparkLine"
                height="100px"
                width="320"
                type="Column"
                data={SparklineAreaData}
                color="rgb(242, 252, 253)"
               />

            </div>

          </div>

          {/* Yearly Sales Card */}
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">

            {/* Number & Text */}
            <div>
              <p className="text-2xl font-semibold ">$43,246</p>
              <p className="mt-1 font-semibold text-md text-gray-400">Yearly Sales</p>
            </div>

            {/* Chart */}
            <div className="w-40">

              {/* Doughnut Component % props */}
              <Doughnut
                id="pie-chart"
                data={ecomPieChartData}
                legendVisiblity={false}
                height="170px"
               />

            </div>

          </div>

        </div>

      </div>

    </div>

  )

}

export default Ecommerce;