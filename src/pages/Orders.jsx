import React from "react";
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from "@syncfusion/ej2-react-grids";

import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";

const Orders = () => (
    
  // CardBlank
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">

    {/* Header */}
    <Header category="Page" title="Orders" />

    {/* Table & props*/}
    <GridComponent
      id="gridcomp"
      dataSource={ordersData}
      allowPaging
      allowSorting
      allowExcelExport
      allowPdfExport
      contextMenuItems={contextMenuItems}
      editSettings={{ allowDeleting: true, allowEditing: true }}
    >
      {/* Columns */}
      <ColumnsDirective>

        {/* Data */}
        {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}

      </ColumnsDirective>

      {/* Functionality */}
      <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit]} />

    </GridComponent>
      
  </div>
    
)

export default Orders;