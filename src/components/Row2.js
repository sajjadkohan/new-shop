import React, { useContext } from 'react'
import { CardRow2Ctx } from '../context/CardOfficialRow2';
import CardOfficial from './smallComponents/CardOfficial';

const Row2 = () => {

    const cardRow2Data = useContext(CardRow2Ctx);

  return (
    <div className='dFlex'>

    {
        cardRow2Data.map(card => <CardOfficial key={card.id} data={card} />)
    }

        
    </div>
  )
}

export default Row2