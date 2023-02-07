import React, { useEffect, useState } from 'react';
import './App.css';

import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey='b4fdc18643c18eb9f807dbb9b9e02eaf2e956eca572e1d8b807a3e2338fdd0dc/stage'
function App( ) {
  const [data,setData]=useState([]);
  useEffect(()=>{
    alanBtn({
     key:alanKey,
     onCommand:({command,items})=>{
      if(command==='head'){
        console.log(items)
        setData(items)
      }
     }
    })

  },[])
  return (
<div>
    <center>
    <div className='container'>
        <div className='row'>
            {
                data.map((item)=>
                <div className='col-md-4' style={{margin:'10px 0'}}>
                    <div className='card' style={{width:'18rem',padding:"7px"}}>
                        
                            <img className='card-img-top' src={item.url} alt=''></img>
                       
                        <div className='card-body'>
                        <div className='card-title'>
                            <h5>{item.name}</h5>
                        </div>
                        <div className='card-text'>
                            Rs.{item.prize}
                        </div>
                        
                        </div>
                    </div>
                </div>
                )
            }
        </div>

    </div>
    </center>
</div>
  );
}

export default App;
