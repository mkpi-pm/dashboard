import React from "react";
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter} from "@syncfusion/ej2-react-grids";
 
import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";

const Customers = () => (

  // CardBlank
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">

    {/* Header */}
    <Header category="Page" title="Customers" />

    {/* Table & props*/}
    <GridComponent
      dataSource={customersData}
      enableHover={false}
      allowPaging
      allowSelection
      allowSorting
      toolbar={["Add", "Edit", "Delete", "Search"]}
      pageSettings={{ pageCount: 5 }}
      selectionSettings={{ persistSelection: true }}
      editSettings={{ allowingDeleting: true, allowingEditing: true }}
      width="auto"
    >
      {/* Columns */}
      <ColumnsDirective>
          
        {/* Data */}
        {customersGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
          
      </ColumnsDirective>

      {/* Functionality */}
      <Inject services={[ Page, Selection, Edit, Toolbar, Sort, Filter ]} />

    </GridComponent>
      
  </div>
    
)

export default Customers;