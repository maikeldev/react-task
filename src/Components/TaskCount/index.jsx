import { useContext } from "react"
import { TaskContext } from "../../context"

function TaskCount(){
   const { countTask, setCountTask } = useContext(TaskContext)

   return(
      <h1 className="text-3xl text-white">Has completado 
         <span> { countTask } </span>de
         <span> {  } </span> Tareas
      </h1>
   )
}

export default TaskCount