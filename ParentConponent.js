import React from 'react'
import ChildComponent from './ChildComponent'
import { useEffect, useState } from 'react'
import axios from 'axios'


const ParentFile = () => {
  const [container, setContainerData ] = useState([]);
  
  useEffect(()=>{
    // fetching Container data
    axios({
      url: "http://localhost:4040/getContainer",
      method: "GET",
      headers: { "Content-Type": "Application/json" },
    }).then((response)=>{
      console.log(response.data)
       setContainerData(response.data.containerData)
    }).catch((err)=> console.log(err));
  }, [])
  return (
    <div>
    
    <ChildComponent data={container }/>

    </div>
  )
}

export default ParentFile