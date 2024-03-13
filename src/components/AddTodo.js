import React from 'react'

const AddTodo = (props) => {
  const handleSubmit = ()=>{
    props.handleSubmit()
    props.setShowForm(false);
  }
  return (
    <div className="z-10 max-w-sm rounded overflow-hidden shadow-lg bg-gray-200 mb-1 flex flex-row grid grid-cols-5 gap-2 pt-2">
      <div className="btns w-full col-span-1 flex flex-col item-between justify-around">
          <button onClick= {()=>{props.setShowForm(false)
          props.handleDataChange("title","")
          props.handleDataChange("description","")
          props.handleDataChange("tag","")}} className="material-icons">
            cancel
          </button>
          <button onClick= {handleSubmit} className="material-icons">
            done
          </button>
      </div>

      <div className="description col-span-4 flex flex-col  w-100 ">
        <input onChange={(e)=> props.handleDataChange(e.target.name,e.target.value) } type="text" name = "title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title"/>
        <input onChange={(e)=> props.handleDataChange(e.target.name,e.target.value) } type="text" name = "description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="description"/>
        <input onChange={(e)=> props.handleDataChange(e.target.name,e.target.value) } type="text" name = "tag" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="#Tag"/>
      </div>
    </div>
  )
}

export default AddTodo