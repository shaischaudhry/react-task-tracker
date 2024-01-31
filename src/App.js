import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
function App() {
  const [tasks, setTasks] = useState(
    [  
      {
          id: 1,
          text: 'Doctors Appointment',
          day: 'Feb 5th at 2:30 pm',
          remindrer: true,
      },
      {
          id: 2,
          text: 'School Meeting',
          day: 'Feb 6th at 2:30 pm',
          remindrer: true,
      },
      {
          id: 3,
          text: 'Food shopping',
          day: 'Feb 5th at 2:30 pm',
          remindrer: false,
      }
      ]
  )

  const onDelete = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id));
}

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete = {onDelete}/>
    </div>
  );
}

export default App;
