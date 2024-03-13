import React from 'react'

const Navbar = (props) => {

  const handleSeach=(e)=>{
    if(e.target.value===""){
      return props.setFilterData(props.data);
    }
    const filteredList = props.data?.filter(obj => 
      obj.title?.toLowerCase().includes(e.target.value.toLowerCase())||
      obj.description?.toLowerCase().includes(e.target.value.toLowerCase())||
      obj.tag?.toLowerCase().includes(e.target.value.toLowerCase())
    );
    props.setFilterData(filteredList)
  }
  return (
    <>
    <nav className="sticky top-0 mt-0 bg-black w-full border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="search">
          <input onChange={(e)=>handleSeach(e)} onBlur={()=>{
          props.setFilterData(props.data)}}type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Task" />
        </div>
        <div className="add-btn">
          <button onClick={()=> props.setShowForm(true)} className='material-icons bg-white'>add</button>
        </div>
      </div>
    </nav>
    </>

  )
}

export default Navbar