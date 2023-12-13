import { TaskProvider } from '../context'
import Home from '../Home'

function App() {

  return (
    <TaskProvider>
      <Home/>
    </TaskProvider>
  )
}

export default App
