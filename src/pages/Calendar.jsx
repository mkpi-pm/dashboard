import React from "react";
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from "@syncfusion/ej2-react-schedule";

import { scheduleData } from "../data/dummy";
import { Header } from "../components";

const Calendar = () => (

  // CardBlank
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">

    {/* Header */}
    <Header category="App" title="Calendar" />

    {/* ScheduleComponent & props*/}
    <ScheduleComponent
      height="650px"
      eventSettings={{ dataSource: scheduleData }}
      selectedDate= {new Date(2021, 0, 10)}
      currentView="WorkWeek"
      // style={{ background: "white", opacity: "0.8" }}
    >
      {/* Functionality */}
      <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
    
    </ScheduleComponent>
      
  </div>
     
)

export default Calendar;