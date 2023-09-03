import Card from '../Card/Card';
import SmallChart from '../Charts/SmallChart';
import './CardLg.scss'

const CardLg = ({data, title}) => {
  return (
    <Card title = {title} size = 'lg'>
      <div className='data'>
        <div className='legend'>
          Grafico 
        </div>
        <div className='chart'>
        <SmallChart data={data?.chart}/>
        </div>
      </div>
    </Card>
  );
}
 
export default CardLg;