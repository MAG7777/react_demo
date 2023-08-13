import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toDoList: [],
    taskEditObj: null,
    checkedTasks:[],
}
const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        getAllTasks(state, action) {
            state.toDoList = [...action.payload]
        },

        removeSingleTask(state, action) {
            state.toDoList = state.toDoList.filter(item => action.payload !== item.id)
        },

        addNewTask(state, action) {
            state.toDoList = [
                ...state.toDoList,
                action.payload
            ]
        },

        editTask(state, action) {
            state.taskEditObj = action.payload;
        },
        putEditedTaskOnList(state, action) {
            let index = state.toDoList.findIndex((item) => item.id === action.payload.data.id);
            state.toDoList[index] = action.payload.data;
        },

        saveCheckedTasks(state, action){

            if(state.checkedTasks.find((item)=>item === action.payload)){
                 state.checkedTasks = state.checkedTasks.filter(item=>item !== action.payload)
            }
            else{
                state.checkedTasks = [...state.checkedTasks, action.payload];

            }
        },

        cleanCheckedTassk(state){
            state.checkedTasks = [];
        }
    }


})


export const {
    getAllTasks,
    removeSingleTask,
    addNewTask,
    editTask,
    putEditedTaskOnList,
    saveCheckedTasks,
    cleanCheckedTassk
} = taskSlice.actions;
export default taskSlice.reducer;