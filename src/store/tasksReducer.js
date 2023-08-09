import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toDoList: []
}
const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        getAllTasks(state, action) {
            state.toDoList = [...action.payload]
        },

        removeSingleTask(state, action){
            state.toDoList =  state.toDoList.filter(item => action.payload !== item.id)
        },

        addNewTask(state, action){
            console.log('aaaaaaaaaaaaaaa==========>>>', action.payload);
            state.toDoList  =  [
                ...state.toDoList,
                action.payload
            ]
        }
    }


})


export const {getAllTasks,removeSingleTask,addNewTask} = taskSlice.actions;
export default taskSlice.reducer;