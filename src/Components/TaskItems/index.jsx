import { XMarkIcon } from '@heroicons/react/24/solid'
import { CheckIcon } from '@heroicons/react/24/solid'

function TaskItems(props){
    return(
        <div className={`${props.stateTask? 'bg-white' : 'bg-white/50'} my-4 rounded-md flex justify-star py-5 px-2 w-1/3 relative`}>
            <CheckIcon
                className={`${props.stateTask? 'bg-green-700': 'bg-red-700'} w-10 h-10  rounded-full text-white p-2 flex`}
            />      
            <p className={`${props.stateTask? 'no-underline' : 'line-through'} flex items-center justify-center px-5`}> {props.text} </p>
            <XMarkIcon
                className='w-8 h-8 bg-gray-900 rounded-full text-white p-2 flex absolute right-1 top-1' 
            />
        </div>
    )
}

export default TaskItems