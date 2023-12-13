function Modal(){
    return(
        <div className="bg-white w-1/2 h-80 flex flex-col justify-center items-center gap-5 rounded-md invisible">
            <label 
                className="text-12"
            > Ingresa una tarea</label>
            <input
                className="p-3 rounded-lg border border-gray-300 hover:border-pink-600"
                placeholder="Ingresa una Tarea Nueva"
            />
        </div>
    )
}

export default Modal