import { useSelector, useDispatch } from "react-redux";
import { addTask,updateInput } from "../redux/tasksSlice";

export const TaskInput = () => {
    const dispatch = useDispatch()
    const inputText = useSelector((state) => state.tasks.inputText)

    return (
        <>
        <input 
        type="text"
        value={inputText}
        onChange={(e)=> dispatch(updateInput(e.target.value))}
        placeholder="añadir una tarea"
        />
        <button onClick={(e)=> dispatch(addTask())}>Agregar Tarea</button>
        </>
    )
}

