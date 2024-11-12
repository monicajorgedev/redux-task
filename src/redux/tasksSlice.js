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
            if (state.inputText.trim()) {
                const maxId = state.tasks.length ? Math.max(...state.tasks.map(task => task.id)) + 1 : 1;
                state.tasks.push({ id: maxId, text: state.inputText });
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


