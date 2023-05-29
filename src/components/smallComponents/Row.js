import React, { useContext, useEffect } from 'react'
import CardClassic from './CardClassic';
import bannerSm3 from '../../images/watch3.png';
import { CardClassicCtx } from '../../context/CardClassicContext';
import { MyContext } from '../../context/getProductsCtx';


const Row = () => {

    const dataCardClassicCtx = useContext(CardClassicCtx);
    const globalCtx = useContext(MyContext);

    useEffect(()=> {
      console.log(" MY CO N T E X ",globalCtx);
    },[])
    console.log(" MY CO N T E X ",globalCtx);

    
    // console.log(dataCardClassicCtx);
  return (
    <div className="rowCostum">
        {
            dataCardClassicCtx.map(card => <CardClassic key={card.id} srcImage={card.image} text={card.title} />)
        }
        
        {/* <CardClassic srcImage={bannerSm3} text="زیبا جادار مظمعن" />
        <CardClassic srcImage={bannerSm3} text="زیبا جادار مظمعن" />
        <CardClassic srcImage={bannerSm3} text="زیبا جادار مظمعن" /> */}
    </div>
  )
}

export default Row;