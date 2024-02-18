import React from 'react'
import Todos from './Todos'

const SearchList = (props) => {
  return (
    <>
    {props.data.length>0 && <div className="search-list z-0 p-2 bg-gray-300 max-w-sm">
      {props.data?.map(item => (
        <Todos key={item.id} object={item} handleTaskDelete={props.handleTaskDelete} handleTaskDone={props.handleTaskDone} handleEdit={props.handleEdit}/>
      ))}
    </div>}
    </>
    
  )
}

export default SearchList