import './App.css'
import tasks from './tasks'


function App() {

  const currentTask = tasks.filter((task) => {
    if (task.state === 'in_progress') {
      return true
    } else if (task.state === 'backlog') {
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
            {currentTask.map(element => (
              <li key={element.id}>
                <strong>{element.title}</strong><span className='state'>{element.state}</span>
                <br />
                Priority: {element.priority}
                <br />
                Est.time: {element.estimatedTime}
              </li>
            ))}
          </ul>

          <hr />

          <h2>Completed Tasks ({completedTaskCount})</h2>

          <ul>
            {completedTask.map(element => (
              <li key={element.id}>
                <strong>{element.title}</strong><span className='state-completed'>{element.state}</span>
                <br />
                Priority: {element.priority}
                <br />
                Est.time: {element.estimatedTime}
              </li>
            ))}
          </ul>

        </main>

      </section>
    </>
  )
}

export default App
