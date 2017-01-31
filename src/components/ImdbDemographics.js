import React from 'react';
import _ from 'lodash';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, ReferenceLine, Tooltip, Legend} from 'recharts';
import Loading from 'react-loading';


export default (props) => {
  const { ratings } = props
  if(!ratings){
    return (
      <div className="ratings-container">
        <Loading type='bars' color='#0D5746'/>
      </div>
    )
  }
  function calculateAverage(arr){
    const sum = arr.map(obj => { return obj.males + obj.females})
    return _.sum(sum) / (arr.length * 2)
  }
  return (
    <div className="ratings-container">
      <h4 className="movie-details-title">Based on IMDb ratings:</h4>
    <BarChart
      width={600}
      height={300}
      data={ratings}
      margin={{top: 10, right: 30, left: 20, bottom: 25}}>
      <Legend />
      <XAxis
        tick={{stroke: 'white', strokeWidth: 1}}
        dataKey="name"/>
      <YAxis
        tick={{stroke: 'white', strokeWidth: 1}}
        interval={1}
        domain={['dataMin - 1', 'dataMax + .5']}/>
      <CartesianGrid strokeDasharray="3 3"/>
      <ReferenceLine
        isFront={true}
        y={calculateAverage(ratings)}
        strokeDasharray="10 5"
        stroke="red" />
      <Tooltip/>
      <Bar dataKey="males" fill="#128dea" />
      <Bar dataKey="average" fill="#0D5746" />
      <Bar dataKey="females" fill="#ff68ef" />
    </BarChart>
    </div>
  )
}
