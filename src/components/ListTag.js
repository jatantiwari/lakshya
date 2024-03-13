import React, { useState } from 'react'

const ListTag = (props) => {
  const [focus, setFocus] = useState(false)
  const [clickedTag, setClickedTag] = useState("")
  const handleSeach = (tag) => {
    if (clickedTag === tag) {
      props.setFilterData(props.data)
      setFocus(false)
      setClickedTag("")
      return
    }
    else {
      props.setFilterData(props.data)
      setClickedTag(tag)
      setFocus(true)
      const filteredList = props.data?.filter(obj =>
        tag !== "" && obj?.tag === tag
      );
      props.setFilterData(filteredList)
    }

  }
  return (
    <>
    <div className=" z-0 tag-list w-full fixed  flex flex-row justify-center grid xxs:grid-cols-5 xs:grid-cols-5 sm:grid-cols-12 md:grid-cols-18 lg:grid-cols-18 xl:grid-cols-20 2xl:grid-cols-20  gap-2 ">
        {props.tags?.map((tag, index) => (
          <div key={index} >
            <button onClick={(e) => {
              setFocus(false)
              handleSeach(tag)
            }
            } className={`text-gray-600 text-sm rounded bg-pink-100 mx-2 p-2 ${focus && clickedTag === tag ? "bg-pink-300" : ""}`}>
              #{tag.toLowerCase()}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default ListTag