import React, { useState } from 'react'
import SearchList from './SearchList'

const ListTag = (props) => {
  const [data,setData] = useState([])
  const [focus,setFocus] = useState(false)
  const [clickedTag,setClickedTag] = useState("")
  const handleSeach=(tag)=>{
    if(clickedTag===tag){
      setFocus(false)
      setClickedTag("")
      return
    }
    else{
      setClickedTag(tag)
      setFocus(true)
    }
    const filteredList = props.data?.filter(obj => 
      tag!=="" && obj?.tag==tag
    );
    setData(filteredList)
  }
  return (
    <>
    <div className=" navbar top-20 w-full  flex flex-row justify-center grid xxs:grid-cols-5 xs:grid-cols-5 sm:grid-cols-12 md:grid-cols-18 lg:grid-cols-18 xl:grid-cols-20 2xl:grid-cols-20  gap-2 ">
      {props.tags?.map((tag, index) => (
      <div key={index} >
      <button onClick={(e)=>{
        setFocus(false)
        handleSeach(tag)
      }
        }  className={`text-gray-600 text-sm rounded bg-pink-100 mx-2 p-2 ${focus && clickedTag===tag?"bg-pink-300":""}`}>
        #{tag}
      </button>
    </div>
    ))}
    </div>
    {focus && <SearchList data={data} handleTaskDelete={props.handleTaskDelete} handleTaskDone={props.handleTaskDone} handleEdit={props.handleEdit}/> }
    </>
  )
}

export default ListTag