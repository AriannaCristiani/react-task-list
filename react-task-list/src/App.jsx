import './App.css'


function App() {
  const tasks = [
    {
      id: 1,
      title: 'Implementare la homepage',
      priority: 1,
      estimatedTime: 120,
      state: 'completed',
    },
    {
      id: 2,
      title: 'Sviluppare il menu di navigazione',
      priority: 2,
      estimatedTime: 60,
      state: 'completed',
    },
    {
      id: 3,
      title: 'Creare il footer del sito',
      priority: 3,
      estimatedTime: 30,
      state: 'completed',
    },
    {
      id: 4,
      title: 'Ottimizzare le performance',
      priority: 1,
      estimatedTime: 180,
      state: 'completed',
    },
    {
      id: 5,
      title: 'Scrivere test per i componenti',
      priority: 2,
      estimatedTime: 90,
      state: 'completed',
    },
    {
      id: 6,
      title: 'Implementare la pagina dei contatti',
      priority: 3,
      estimatedTime: 60,
      state: 'completed',
    },
    {
      id: 7,
      title: 'Aggiungere animazioni CSS',
      priority: 2,
      estimatedTime: 30,
      state: 'backlog',
    },
    {
      id: 8,
      title: "Integrare l'API di autenticazione",
      priority: 1,
      estimatedTime: 120,
      state: 'in_progress',
    },
    {
      id: 9,
      title: 'Aggiornare la documentazione',
      priority: 3,
      estimatedTime: 60,
      state: 'backlog',
    },
    {
      id: 10,
      title: 'Rifattorizzare il codice CSS',
      priority: 2,
      estimatedTime: 90,
      state: 'in_progress',
    },
  ]
  //console.log(tasks)

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
        <main>
          <h2>Current Tasks ({currentTaskCount})</h2>
          <ul>
            <li>{currentTask[0].title} <span className='state'>{currentTask[0].state}</span></li>
            <li>Priority: {currentTask[0].priority}</li>
            <li>Est.time: {currentTask[0].estimatedTime} </li>
          </ul>
          
        </main>
      </section>
    </>
  )
}

export default App
