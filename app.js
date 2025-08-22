import React,{useState}from 'react'
//import {useEffect} from 'react'
import ReactDOM from 'react-dom';
import Content from './project.js'
import Header from './header.js'
import Footer from './footer.js'
import Input from './input.js'
import Search from'./Search.js'


function App(){
  const [value,setValue]=useState([])
  const [item,setItem]=useState('')
  const [search, setSearch]=useState('')

 function handleClick(id){
   const listItems=value.map(el=>(
     el.id===id?{...el,checked:!el.checked}:el
   ))
   localStorage.setItem('fruitList',JSON.stringify(listItems)) 
   setValue(listItems)
 }
 function handleDelete(id){
   const del=value.filter(n=>id!==n.id)
   localStorage.setItem('fruitList',JSON.stringify(del)) 
   setValue(del)
 }
function handleSubmit(e){
  e.preventDefault()
  const id=value.length?value[value.length-1].id+1:1
  
  const newitem={id,fruit:item,checked:false}
  const listItems=[...value,newitem]
  setValue(listItems)
  console.log(item) //optional
  localStorage.setItem('fruitList',JSON.stringify(listItems)) 
  setItem('')
}
  return(
    <main>
          <Header/>
          <Search
          search={search}
          setSearch={setSearch}
          />
          <Input
          item={item}
          setItem={setItem}
          handles={handleSubmit}
          />

          <Content
          value={value.filter(element=>element.fruit.toLowerCase().includes(search.toLowerCase()))}
          handleClick={handleClick}
          handleDelete={handleDelete}
          
          />
          <Footer/>
    </main>
  )
  
  }
ReactDOM.render(
  <App/>,
  document.getElementById('react-app')
);
