import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    inputText: ''
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        updateInput : (state, action)=> {
            state.inputText = action.payload
        },
        addTask: (state, action) => {
            if(state.inputText.trim()){
                const maxId = state.tasks.reduce((max, task) => Math.max(max, task.id), 0);
                state.tasks.push({id: maxId + 1, text: state.inputText})
            }
            state.inputText = ''
        },
        deleteTask: (state, action) => {
            const taskId = action.payload
            state.tasks = state.tasks.filter(task => task.id !== taskId)
        }
    }
})

export const {updateInput, addTask, deleteTask } = tasksSlice.actions
export default tasksSlice.reducer


