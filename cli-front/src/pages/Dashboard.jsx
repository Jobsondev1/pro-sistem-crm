import React from 'react'
import Box from '../components/box/Box'
import DashboardWrapper ,{ DashboardWrapperMain, DashboardWrapperRight}from '../components/dashboard-wrapper/DashboardWrapper'
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
                            <Box/>
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