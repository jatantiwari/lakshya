import React, { useState } from 'react'

const Todos = (props) => {
  const [edit,setEdit] = useState(false);
  const [isChecked,setIsChecked]= useState(props.object.isDone)
  const [title,setTitle]= useState(props.object.title)
  const [description,setDescription]= useState(props.object.description)
  const [tag,setTag]= useState(props.object.tag)

  
  return (
    <div className=" max-w-sm rounded overflow-hidden shadow-lg bg-gray-200 mb-1 flex flex-row grid justify-item-center grid-cols-5 gap-2 mt-2">
      <div className="btns w-full col-span-1 flex flex-col item-between justify-around">
        <div className=" w-full flex justify-center">
          {!edit && <input onChange={(e)=>{props.handleTaskDone(e.target.checked,props.object.id)
          setIsChecked(!isChecked)}} checked={isChecked} type="checkbox" name="done" id="done" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />}
        </div>
        <div className="btn-container flex flex-row flex justify-around ">
          {!edit && <button onClick={()=>props.handleTaskDelete(props.object.id)} className="delete ">
            <span className="material-icons">delete</span>
          </button>}
          {!edit && <button onClick={()=>setEdit(true)} className="edit">
            <span className="material-icons">edit</span>
          </button>}
          {edit && <button onClick={()=>{props.handleEdit(props.object.id,title,description,tag)
          setEdit(false)}} className="">
          <span className="material-icons">done</span>
          </button>}
          {edit && <button  onClick={()=>setEdit(false)} className="">
          <span  className="material-icons">cancel</span>
          </button>}
        </div>

      </div>

      <div className="description col-span-4 flex flex-col  w-100">
        <div className="inline-block bg-gray-200 rounded-full text-2xl font-semibold text-gray-700 flex flex-col items-center  ">
          {!edit && <h3 name = "title " className = {props.object.isDone?`line-through text-red-400`:""}>{props.object.title}</h3>}
          {edit && <input onChange={(e)=> setTitle(e.target.value)} value={title} type="text" name = "title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title"/>}
        </div>
        <div className="text-xl text-black text-base ml-2 w-2/3">
          {!edit && <p name = "description" className = {props.object.isDone?`line-through text-red-400`:""} >{props.object.description}</p>}
          {edit && <input onChange={(e)=> setDescription(e.target.value)} value={description} type="text" name = "title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title"/>}
        </div>
        <div className="tag text-sm text-gray-500 ml-2 w-2/3">
          {!edit && <p name = "tag" className = {props.object.isDone?`line-through text-red-400`:""}>{props.object.tag}</p>}
          {edit && <input onChange={(e)=> setTag(e.target.value)} value = {tag} type="text" name = "title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title"/>}
        </div>
      </div>
    </div>
  )
}

export default Todos