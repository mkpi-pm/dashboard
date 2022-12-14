import React from "react";
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";

import { kanbanData, kanbanGrid } from "../data/dummy";
import { Header } from "../components";

const Kanban = () => (

  // CardBlank
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">

    {/* Header */}
    <Header category="App" title="Kanban" />

    {/* KanbanComponent & props*/}
    <KanbanComponent
      id="kanban"
      dataSource={kanbanData}
      cardSettings={{
        contentField: "Summary",
        headerField: "Id",
        tagsField: "Tags",
        grabberField: "Color",
        footerCssField: "ClassName"
      }}
      keyField="Status"
    >
      {/* Columns */}
      <ColumnsDirective>
              
        {/* Data */}
        {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}

      </ColumnsDirective>

    </KanbanComponent>
      
  </div>
    
)

export default Kanban;