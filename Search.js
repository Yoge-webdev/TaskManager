import React from 'react'
function Search({search,setSearch}){
  
  return(
    <form className='searchform'onSubmit={(e)=>e.preventDefault()}>
      <label>Search:</label>
      <input role='searchbox'placeholder='search here'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />
      
      
    </form>
  )
}
export default Search