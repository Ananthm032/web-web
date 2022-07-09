import React from 'react'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import "./grapic.css"

function Chart() {
    const userdata=[
        {
          name: 'Jun',
         Activeuser: 4000,
         target:3000,
        
        },
        {
          name: 'Feb',
          Activeuser: 3000,
          target:2000,
        },
        {
          name: 'Mar',
          Activeuser: 2000,
          target:2500,
        },
        {
          name: 'Apr',
          Activeuser: 2780,
          target:3000,
          
        },
        {
          name: 'May',
          Activeuser: 1890,
          target:2000,
        },
        {
          name: 'June',
          Activeuser: 2390,
          target:2500,
        },
        {
          name: 'July',
          Activeuser: 3490,
          target:2500,
        },
        {
          name: 'Aug',
          Activeuser: 5490,
          target:4500,
        },
        {
          name: 'Sep',
          Activeuser: 3432,
          target:3500,
        },
      {  name: 'Oct',
        Activeuser: 1490,
        target:2500,
      },
      {  name: 'Nov',
      Activeuser: 2485,
      target:2500,
    },
    {  name: 'Dec',
    Activeuser: 4320,
    target:2500,
    }
      ]
  return (
    < div className='chart'>
        <h3 className='chart-title'>This Year Project Analytic</h3>  
        <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={userdata}>
            <XAxis dataKey='name' stroke='#5550bd'/>
              <Line type='monotone' dataKey="Activeuser" stroke='#9900E6' /> 
    
       <CartesianGrid stroke='#3355FF' strokeDasharray='3'/>
        <Tooltip/>
        <Legend/>
         </LineChart>
        </ResponsiveContainer>
            </div>
  )

  }
export default Chart