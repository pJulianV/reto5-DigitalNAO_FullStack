import Card from '../Card/Card';
import SmallChart from '../Charts/SmallChart';
import './CardMd.scss'

const CardMd = ({data, title, subtitle, isClient}) => {
  console.log(data)
  return (
    <Card title = {title} size = 'md'>
    <div className='data'>
      <div className='data-left'>
        <div className='data-left-top'>
          {subtitle ? 
          (
            <span className='sub'>{subtitle}</span>
          ) : null}
          <span className='num'>
            ${data?.big_num}
          </span>
        </div>
        <div className='data-left-bottom'>
            <span className='rate'>
            {data?.rate}%
            </span>
            <span className='small-num'>
              ${data?.small_num}
            </span>
        </div>
      </div>
      <div className='data-right'>
        <SmallChart data={isClient ? data?.client_chart : data?.chart}/>
      </div>
    </div>
    </Card>
  );
}
 
export default CardMd;