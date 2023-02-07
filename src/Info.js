import React from 'react'
import Info1 from './Info1'
const Info = ({data}) => {
  return (
    <div>
 
      {
        data.map((data1=>{
            <Info1 data2={data1}/>
        }))
      }
    </div>
  )
}

export default Info
