import React from 'react'
function Input({item,setItem,handles}){
  return(
     <form className='form'
     onSubmit={handles}>
     <label>Add Tasks:</label>
       <input placeholder='add new task'required 
       value={item}
       onChange={(e)=>setItem(e.target.value)}/>
      <button type='submit'>+</button>
     </form>
  )
}
export default Input