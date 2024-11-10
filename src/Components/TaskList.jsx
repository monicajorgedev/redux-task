import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasksSlice";

export const TaskList = () => {
    const dispatch = useDispatch()
    const tasks = useSelector((state) => state.tasks.tasks)

    return (
        <>
        <h2>Lista de tareas.</h2>
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                <p>{task.text}</p>
                <button onClick={()=> dispatch(deleteTask(task.id))}>Eliminar</button>
            </li>
            )
                
            )}
        </ul>
        </>
    )
}

