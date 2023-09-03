import { useSelector } from "react-redux";
import DataTable from "../../components/DataTable/DataTable";

const Invoices = () => {
  const charts = useSelector((state) => state.charts.data)
  return ( <div className="invoices-view container">
    <DataTable title='Historial de Recibos' data={charts.invoices}/>
  </div> );
}
 
export default Invoices;