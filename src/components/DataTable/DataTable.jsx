import Card from '../Card/Card';
import SmallChart from '../Charts/SmallChart';
import './DataTable.scss'

const DataTable = ({data, title, length, isProducts, isGlobal}) => {

  if (isGlobal) {
    return (
      <Card title = {title} size = 'lg'>
      <div className='data-table'>
        <div className='labels data-table-row'>
          <span>Pais</span>
          <span className='mobile-hidden' >Ventas</span>
          <span>Monto</span>
        </div>
        <div className='items'>
          {data?.slice(0, length).map((item, idx) => {
            return (
              <div key={`${item.id}-${idx}`} className='item data-table-row'>
                <span>{item.id}</span>
                <span className='mobile-hidden' >{Math.floor(item.value / 2)}</span>
                <span>${item.value}</span>
              </div>
            )
          })}
        </div>
      </div>
    </Card>
    )
  }

  return (
    <Card title = {title} size = 'lg'>
      <div className='data-table'>
        <div className='labels data-table-row'>
          <span className='mobile-hidden' >Nr</span>
          <span>Id</span>
          <span>Nombre</span>
          {isProducts ? (
            <>
              <span className='mobile-hidden' >Categoria</span>
              <span className='mobile-hidden' >Ventas</span>
            </>
          ) : (
            <>
            <span className='mobile-hidden' >Ciudad</span>
            <span className='mobile-hidden' >Fecha de Emisión</span>
            <span>Estado</span>
            </>
          )}
          <span>Monto</span>
        </div>
        <div className='items'>
          {data?.slice(0, length).map((item, idx) => {
            return (
              <div key={`${item.id}-${idx}`} className='item data-table-row'>
                <span className='mobile-hidden' >{idx+1}.</span>
                <span>{item.id}</span>
                <span className={isProducts? null : "mobile-hidden" } >{isProducts ? item.prod : item.cust}</span>
                {isProducts ? 
                (
                  <>
                  <span className='mobile-hidden' >{item.category}</span>
                  <span className='mobile-hidden' >{item.sales}</span>
                  </>

                ) : (
                  <>
                <span className='mobile-hidden' >{item.city}</span>
                <span className='mobile-hidden' >{item.date}</span>
                <span>{item.status}</span>
                  </>
                )
                }
                <span>{item.amount}</span>
              </div>
            )
          })}
        </div>
      </div>
    </Card>
  );
}
 
export default DataTable;