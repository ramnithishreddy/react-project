import React from 'react'

const Basic = ({data, displayList}) => {
    console.log(data,displayList,'4::')
  return (
    <div> <h1>Testing Example</h1>
       { displayList ?
        <ul id="mydata">
            {data.map(item => (
                <li key={item.id}>
                    {item.id}
                    {item.first_name},
                    {item.last_name},
                    {item.email}

                </li>
            ))}
        </ul>:''}

    </div>
  )
}

export default Basic