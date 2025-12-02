import { useState } from 'react'
import TodoItem from './components/TodoItem'
import './App.css'

function App() {
  const[todos,setTodos]=useState([])// 할일 목록 
  const[input,setInput]=useState('') // 입력값 

  // 새 할 일 추가
  const addTodo=()=>{
    if(input.trim()==='')return
    setTodos([...todos,{text:input,done:false}])
    setInput('')
  }

  // 할 일 삭제
  const removeTodo =(index)=>{
    const newTodos=todos.filter((_,i)=>i!==index)
    setTodos(newTodos)
  }

  //완료 상태 토글
  const toggleDone=(index)=>{
    const newTodos =todos.map((todo,i)=>
    i===index?{...todo,done:!todo.done}:todo
  )
  setTodos(newTodos)
  }
  return (
    <>
    <div className='App'>
      <h1>To-Do List</h1>
      <div className='input-area'>
        <input
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        placeholder="할 일을 입력하세요"
        />
        <button onClick={addTodo}>추가</button>
      </div>
      <ul>
        {todos.map((todo,index)=>(
          <TodoItem
          key={index}
          todo={todo}
          onRemove={()=>removeTodo(index)}
          onToggle={()=>toggleDone}
          />
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
