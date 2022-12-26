import React from 'react';
import { GridComponent,ColumnsDirective,
ColumnDirective,Resize, Sort, ContextMenu,
Filter,Page,ExcelExport,PdfExport,Edit,
 Inject} from '@syncfusion/ej2-react-grids';

 import { ordersData,contextMenuItems,ordersGrid} from '../data/dummy';
 import { Header } from '../components';

const Siparis = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Siparis" />
      <GridComponent>
        <ColumnsDirective>
        {ordersGrid.map((item,index)=>(
          <ColumnDirective key={index} {...item}/>
        ))}
        </ColumnsDirective>
      </GridComponent>
    </div>
  )
}

export default Siparis