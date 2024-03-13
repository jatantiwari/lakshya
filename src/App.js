// import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import Navbar from './components/Navbar';
import AddTodo from './components/AddTodo';
import ListTag from './components/ListTag';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([])
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [tag, setTag] = useState("")
  const [tagList, setTagList] = useState([])
  let newData = {
    id: "",
    title: "",
    description: "",
    tag: "",
    isDone: false
  }
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    let todos = []
    if (storedTodos !== null) {
      todos = JSON.parse(storedTodos);
    }
    setFilterData(todos)
    setData(todos);
    let list = [];
    for (let i = 0; i < todos.length; i++) {
      if (!list.includes(todos[i].tag)) {
        list.push(todos[i].tag)
      }
    }
    setTagList(list)
  }, [])

  const handleUpdateTagsList = () => {
    let list = []
    // console.log(data)
    for (let i = 0; i < data.length; i++) {
      if (!list.includes(data[i].tag)) {
        list.push(data[i].tag)
      }
    }
    setTagList(list)
  }


  const handleDataChange = (att, value) => {
    if (att === "title") {
      setTitle(value)
    }
    if (att === "description") {
      setDescription(value)
    }
    if (att === "tag") {
      setTag(value)
    }
  }
  const handleSubmit = () => {
    newData.id = uuidv4();
    newData.title = title;
    newData.description = description;
    newData.tag = tag;
    // console.log(title.length)
    if (newData.title.length === 0) {
      newData.title = "Title"
    }
    if (newData.description.length === 0) {
      newData.description = "Description";
    }
    if (newData.tag.length === 0) {
      newData.tag = "Tag"
    }

    let finData = data;
    finData.push(newData)
    setFilterData(finData)
    setData(finData)
    localStorage.setItem('todos', JSON.stringify(data));
    handleUpdateTagsList()
    setTitle("")
    setTag("")
    setDescription("")
  }

  const handleEdit = (id, title, description, tag) => {
    let newList = data;
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].id === id) {
        newList[i].title = title
        newList[i].description = description
        newList[i].tag = tag
        break;
      }
    }
    setFilterData(newList)
    setData(newList)
    localStorage.setItem('todos', JSON.stringify(newList));
    handleUpdateTagsList()
    setTitle("")
    setTag("")
    setDescription("")
  }

  const handleTaskDone = (status, id) => {
    let newList = data;
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].id === id) {
        newList[i].isDone = status
        break;
      }
    }
    setFilterData(newList)
    setData(newList);
    handleUpdateTagsList()
    localStorage.setItem("todos", JSON.stringify(newList));
  }
  const handleTaskDelete = (id) => {
    if (window.confirm("Are you sure you want delete this task")) {
      let newList = data.filter(obj => obj.id !== id);
      setFilterData(newList);
      setData(newList);
      localStorage.setItem("todos", JSON.stringify(newList));
      handleUpdateTagsList()
      window.location.reload();
    }
  }
  return (
    <div className="h-screen w-full flex flex-col items-center justify-between bg-blue-600">
      <div className='w-full'>
        <Navbar setShowForm={setShowForm} data={data} filterData={filterData} handleTaskDelete={handleTaskDelete} handleTaskDone={handleTaskDone} handleEdit={handleEdit} setData={setData} setFilterData={setFilterData} />
        <ListTag tags={tagList} data={data} handleTaskDelete={handleTaskDelete} filterData={filterData} handleTaskDone={handleTaskDone} handleEdit={handleEdit} setData={setData} setFilterData={setFilterData} />
      </div>
      <div className="overflow-y-scroll no-scrollbar">
        {showForm && < AddTodo handleDataChange={handleDataChange} filterData={filterData} handleSubmit={handleSubmit} setShowForm={setShowForm} />}
        {filterData?.map(item => (
          <Todos key={item.id} object={item} handleTaskDelete={handleTaskDelete} filterData={filterData} handleTaskDone={handleTaskDone} handleEdit={handleEdit} />
        ))}
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
