import React, { useState } from 'react'

function App () {

    const [location ,setLocation] = useState([''])
  return (
    <div>
Location:
<button onClick={() =>{
    setLocation([...location, ''])
}}>
    Add</button>
{
    location.map((item,index) => {
    return <>
    <input value={item}/>
        <button 
        onClick={()=>{
            const newarr = location.filter((i,j) =>{
                return index !==j
            })
            console.log(newarr)
        setLocation(newarr)
        }}
        >Delete</button>
    </>
})
}

    </div>
  )
}
export default App;
