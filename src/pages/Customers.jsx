import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";

const Customers = () => {
  return (
    // background
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">

      {/* Header */}
      <Header category="Page" title="Customers" />

      {/* Table */}
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        editSettings={{ allowingDeleting: true, allowingEditing: true }}
        with="auto"
      >
        {/* Columns */}
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>

        {/* Functionality */}
        <Inject services={[ Page, Selection, Edit, Toolbar, Sort, Filter ]} />

      </GridComponent>
    </div>
  )
}

export default Customers;