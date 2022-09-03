import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";

const Customers = () => {
  return (
    // CardBlank
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">

      {/* Header */}
      <Header category="Page" title="Customers" />

      {/* Table & props*/}
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
          
          {/* values */}
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