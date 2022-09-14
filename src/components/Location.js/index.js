import React, { useState } from 'react'

function App () {

    const [location ,setLocation] = useState([''])
  return (
    <div>
Location:
<button onClick={() =>{
    setLocation([null,null])
}}>
    Add</button>
{
    location.map((item) => {
    return<input value={item}/>

})
}

    </div>
  )
}
export default Location;
