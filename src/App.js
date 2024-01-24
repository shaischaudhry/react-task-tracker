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
          id: 1,
          text: 'Food shopping',
          day: 'Feb 5th at 2:30 pm',
          remindrer: false,
      }
      ]
  )

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
