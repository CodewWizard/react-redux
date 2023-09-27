import {createStore} from 'redux';
import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialState = {
    counter : 0,
    showCounter : false     
}

// preparing a slice of our global space
const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.amount;
        },
        reset(action){
            state.counter = 0
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        }
    }
})


const store = configureStore({
    reducer : counterSlice.reducer
});

export const counterActions =  counterSlice.actions

export default store;

