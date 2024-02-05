import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {

  const [showAddTasks, setShowAddTasks] = useState(false)
  const [tasks, setTasks] = useState(
    [  
      {
          id: 1,
          text: 'Doctors Appointment',
          day: 'Feb 5th at 2:30 pm',
          reminder : true,
      },
      {
          id: 2,
          text: 'School Meeting',
          day: 'Feb 6th at 2:30 pm',
          reminder : true,
      },
      {
          id: 3,
          text: 'Food shopping',
          day: 'Feb 5th at 2:30 pm',
          reminder : false,
      }
      ]
  )

  const addTask = (task) =>{
      const id = Math.floor(Math.random * 10000) + 1
      const newTask = {id, ...task}

      setTasks([...tasks, newTask])

  }

  const onDelete = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id));
}
  const onToggle = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder } : task));
  }

  return (
    <div className="container">
      <Header onAdd = {() => setShowAddTasks(!showAddTasks)} showAdd = {showAddTasks}/>
      {showAddTasks && <AddTask onAdd = {addTask} />}
      { tasks.length > 0? (<Tasks tasks={tasks} 
        onDelete = {onDelete} onToggle = {onToggle}/>)
         : ('Your Tasklist is empty, woohoo!')}
    </div>
  );
}

export default App;
