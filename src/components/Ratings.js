import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


export default (props) => {
  console.log(props)
  const { ratings } = props
  return (
    <div>

    <BarChart
      width={600}
      height={300}
      data={ratings}
      margin={{top: 5, right: 30, left: 20, bottom: 25}}>
      <Legend />
      <XAxis dataKey="name"/>
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Bar dataKey="males" fill="#6687ff" />
      <Bar dataKey="average" fill="gray" />
      <Bar dataKey="females" fill="#ffa0f8" />
    </BarChart>

    
    </div>
  )
}
