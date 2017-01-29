import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


export default (props) => {
  const { ratings } = props
  return (
    <div className="ratings-container">
      <h4 className="movie-details-title">Based on IMDb ratings:</h4>
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
      <Bar dataKey="males" fill="blue" />
      <Bar dataKey="average" fill="gray" />
      <Bar dataKey="females" fill="pink" />
    </BarChart>
    </div>
  )
}
