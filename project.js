import React from 'react'
function Content({value,handleClick,handleDelete}){

  
 
  
  return(
    
    <main>
      {value.length?
      <ul>
        {
          value.map(element=>(
    <li key={element.id}>
      <input type='checkbox'checked={element.checked}
      onChange={()=>handleClick(element.id)}/>
      <label>{element.fruit}</label>
      <button onClick={()=>handleDelete(element.id)}>delete</button>
    </li>
  ) 
  ) 
        }
      </ul>
:
<p>Your list is empty</p>
}
   </main>
  )
}
export default Content