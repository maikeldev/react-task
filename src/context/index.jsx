import { createContext, useState } from "react"

export const TaskContext = createContext()
export const TaskProvider = ({ children }) => {

   const [ countTask, setCountTask ] = useState(0)

   const tasks = [ 
      { text : "Manzana", state : true },
      { text : "Pera", state : false },
      { text : "Mandarina", state : true },
   ];

   /* Estado para Abrir y Cerrar Modal */
   const [openModal, setOpenModal] = useState(false)

   return (
      <TaskContext.Provider value={{
         openModal,
         setOpenModal,
         tasks,
         countTask,
         setCountTask,
      }}>
         { children }
      </TaskContext.Provider>
   )
}