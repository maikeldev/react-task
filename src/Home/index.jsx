import { useContext } from 'react'
import { TaskContext } from '../context'
import TaskCount from '../Components/TaskCount'
import TaskSearch from '../Components/TaskSearch'
import TaskItems from '../Components/TaskItems'
import TasButtom from '../Components/TaskButtom'
import Modal from '../Components/Modal'
import './home.css'

function Home() {
  const context = useContext(TaskContext)

  return (
    <div className="bg-home flex justify-star flex-col items-center p-5">
      <TaskCount/>
      <TaskSearch/>
      { 
        context.tasks.map( task => (<TaskItems/>))
      }

      
      <TasButtom/>

      <Modal/>
    </div>
  )
}

export default Home