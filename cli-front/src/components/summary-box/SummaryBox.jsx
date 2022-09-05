import React from 'react'
import './summary-box.scss'
import Box from '../box/Box'
import {CircularProgressbarWithChildren} from 'react-circular-progressbar'
const SummaryBox = ( {item} ) => {
  return (
   <Box>
         <div className='summary-box'>
        <div className="summaru-box__info">
            <div className="summary-box__info__title">
                <div>{item.title}</div>
                <span>{item.subtitle}</span>
            </div>
            <div className="summary-box__info__value">
                {item.value}
            </div>
        </div> 
         <div className="summary-box__chart">
            <CircularProgressbarWithChildren>
                <div className="sunnary-box__chart_value">
                    {item.percent}%
                </div>
            </CircularProgressbarWithChildren>
        </div>      
    </div>
   </Box>
  )
}

export default SummaryBox