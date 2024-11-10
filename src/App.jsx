import { useDispatch } from "react-redux";
import { addTask } from "./redux/tasksSlice";
import { deleteTask } from "./redux/tasksSlice";
import { TaskList } from './Components/TaskList'
import { TaskInput } from './Components/TaskInput'

const App = () => {
  
  return (
    <>
    <TaskInput />
    <TaskList />
    </>
  );
};

export default App;
