import { createContext, useState } from "react"

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {

   const [ countTask, setCountTask ] = useState(0)

   return (
      <TaskContext.Provider value={{
         countTask,
         setCountTask,
      }}>
         { children }
      </TaskContext.Provider>
   )
}