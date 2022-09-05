import React from 'react'
import DashboardWrapper ,{ DashboardWrapperMain, DashboardWrapperRight}from '../components/dashboard-wrapper/DashboardWrapper'
import SummaryBox from '../components/summary-box/SummaryBox'
import { data } from '../constants'

const Dashboard = () => {
  return (
    <DashboardWrapper>
        <DashboardWrapperMain>
           <div className='rou'>
              <div className='col-8 col-md-12'>
                <div className='row'>
                  {
                    data.summary.map((item, index)=>(
                      <div key={`summary-${index}`} className ='col-6 col-md-6 col-sm-12 mb'>
                            <SummaryBox item={item}/>
                      </div>
                    ))
                  }
                </div>
              </div>
          </div>
        </DashboardWrapperMain>  

        <DashboardWrapperRight>
            DashboardWrapperRight
        </DashboardWrapperRight>    
    </DashboardWrapper>
  )
}

export default Dashboard