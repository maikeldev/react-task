import { useContext } from "react"
import { TaskContext } from "../../context"

function Modal(){
    const { openModal, setOpenModal } = useContext(TaskContext)

    return(
        <div className={`${openModal? 'hidden' : 'fixed'} bg-white w-1/2 h-80 flex flex-col justify-center items-center gap-5 rounded-md `}>
            <label 
                className="text-12 text-2xl"
            > Ingresa una tarea</label>
            <input
                className="p-3 rounded-lg border border-gray-300 hover:border-pink-600"
                placeholder="Ingresa una Tarea Nueva"
            />
            <div className="flex gap-4">
                <button
                    className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"
                >
                    Agregar
                </button>
                <button
                    className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 "
                    onClick={() => {setOpenModal(!openModal)}}
                >
                    Cerrar
                </button>
            </div>
        </div>
    )
}

export default Modal