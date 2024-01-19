import React,{useState} from "react";

const TestWithMockData=({data,flag})=>{
    const [elements, setElements] = useState(data);
    const [toggleTextVisible, setToggleTextVisible] = useState(flag)
    return(
        <div data-testid="section">
         <h1>Testing  fire Event Data</h1>
         { elements && elements.map(item => (
        <div id='record' key={item.id}>
          {item.id}: {item.name}
        </div>
      ))}
       <button data-testid="addbtn" onClick={()=>{
         setElements([...elements, {
            id: 4,
            name: 'divya'
          }])
       }}>
        click here
       </button>
       
       {toggleTextVisible && <h1 id="test">  Test1</h1>}

       <button id="btnClick" onClick={()=>setToggleTextVisible(!toggleTextVisible)}>show/hide</button>
        </div>
    )
}

export default TestWithMockData;