import React, { useState } from 'react'
import SearchList from './SearchList';

const Navbar = (props) => {
  const [data,setData] = useState([])
  const [focus,setFocus] = useState(false)
  const handleSeach=(e)=>{
    if(e.target.value===""){
      return setData([]);
    }
    const filteredList = props.data?.filter(obj => 
      obj.title?.toLowerCase().includes(e.target.value.toLowerCase())||
      obj.description?.toLowerCase().includes(e.target.value.toLowerCase())||
      obj.tag?.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setData(filteredList)
  }
  return (
    <>
    <nav className=" mt-0 bg-black w-full border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="search">
          <input onChange={(e)=>handleSeach(e)} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Task" />
        </div>
        <div className="add-btn">
          <button onClick={()=> props.setShowForm(true)} className='material-icons bg-white'>add</button>
        </div>
      </div>
    </nav>
    {focus && <SearchList data={data} handleTaskDelete={props.handleTaskDelete} handleTaskDone={props.handleTaskDone} handleEdit={props.handleEdit} />}
    </>

  )
}

export default Navbar