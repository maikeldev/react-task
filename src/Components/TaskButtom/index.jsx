import { useContext } from "react"
import { TaskContext } from "../../context"
import { PlusIcon } from '@heroicons/react/24/solid'


function TaskButtom(){
    const {openModal, setOpenModal} = useContext(TaskContext)

    return(

        <button
            className="bg-white w-14 h-14 rounded-full fixed bottom-4 right-4 shadow-xl hover:bg-white/50"
            onClick={ () => {setOpenModal(!openModal) }}
        >
            <PlusIcon/>
         </button>
    )            
   
}

export default TaskButtom