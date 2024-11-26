import './App.css'
import tasks from './tasks'


function App() {

  const currentTask = tasks.filter((task) => {
   if(task.state === 'in_progress'){
    return true
   }else if(task.state === 'backlog'){
    return true
   }
  })
  //console.log(currentTask)
  const currentTaskCount = currentTask.length

  const completedTask = tasks.filter((task) => task.state === 'completed')
  //console.log(completedTask)
  const completedTaskCount = completedTask.length
  
  

  return (
    <>
      <section>
        <header className='header'>
          <h1><strong>Task Manager</strong></h1>
        </header>
        <main className='main'>
        <h2>Current Tasks ({currentTaskCount})</h2>
          <ul>
            <li><strong>{currentTask[0].title} </strong><span className='state'>{currentTask[0].state}</span></li>
            <li>Priority: {currentTask[0].priority}</li>
            <li>Est.time: {currentTask[0].estimatedTime} </li>

            <li><strong>{currentTask[1].title}</strong><span className='state'>{currentTask[1].state}</span></li>
            <li>Priority: {currentTask[1].priority}</li>
            <li>Est.time: {currentTask[1].estimatedTime} </li>

            <li><strong>{currentTask[2].title}</strong><span className='state'>{currentTask[2].state}</span></li>
            <li>Priority: {currentTask[2].priority}</li>
            <li>Est.time: {currentTask[2].estimatedTime} </li>

            <li><strong>{currentTask[3].title}</strong><span className='state'>{currentTask[3].state}</span></li>
            <li>Priority: {currentTask[3].priority}</li>
            <li>Est.time: {currentTask[3].estimatedTime} </li>
          </ul>

          <hr />

          <h2>Current Tasks ({completedTaskCount})</h2>
          <ul>
            <li><strong>{completedTask[0].title} </strong><span className='state'>{completedTask[0].state}</span></li>
            <li>Priority: {completedTask[0].priority}</li>
            <li>Est.time: {completedTask[0].estimatedTime} </li>

            <li><strong>{completedTask[1].title}</strong><span className='state'>{completedTask[1].state}</span></li>
            <li>Priority: {completedTask[1].priority}</li>
            <li>Est.time: {completedTask[1].estimatedTime} </li>

            <li><strong>{completedTask[2].title}</strong><span className='state'>{completedTask[2].state}</span></li>
            <li>Priority: {completedTask[2].priority}</li>
            <li>Est.time: {completedTask[2].estimatedTime} </li>

            <li><strong>{completedTask[3].title}</strong><span className='state'>{completedTask[3].state}</span></li>
            <li>Priority: {completedTask[3].priority}</li>
            <li>Est.time: {completedTask[3].estimatedTime} </li>

            <li><strong>{completedTask[4].title}</strong><span className='state'>{completedTask[4].state}</span></li>
            <li>Priority: {completedTask[4].priority}</li>
            <li>Est.time: {completedTask[4].estimatedTime} </li>

            <li><strong>{completedTask[5].title}</strong><span className='state'>{completedTask[5].state}</span></li>
            <li>Priority: {completedTask[5].priority}</li>
            <li>Est.time: {completedTask[5].estimatedTime} </li>
          </ul>
          
        </main>
      </section>
    </>
  )
}

export default App
