import TaskCount from '../Components/TaskCount'
import TaskSearch from '../Components/TaskSearch'
import TaskItems from '../Components/TaskItems'
import TasButtom from '../Components/TaskButtom'
import Modal from '../Components/Modal'
import './home.css'

function Home() {
  return (
    <div className="bg-home flex justify-star flex-col items-center p-5">
      <TaskCount/>
      <TaskSearch/>
      <TaskItems/>
      <TasButtom/>

      <Modal/>
    </div>
  )
}

export default Home