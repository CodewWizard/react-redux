import {createStore} from 'redux';
import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialCounterState = {
    counter : 0,
    showCounter : false
}

// preparing a slice of our global space
const counterSlice = createSlice({
    name : 'counter',
    initialState : initialCounterState,
    reducers : {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        reset(state){
            state.counter = 0
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        }
    }
})

const initialAuthState = {
    isAuthenticated : false
}

const authSlice = createSlice({
    name : 'authentication',
    initialState: initialCounterState,
    reducers : {
        login(state){
            state.isAuthenticated = true;
        },

        logout(state){
            state.isAuthenticated = false;
        }
    }
})

const store = configureStore({
    reducer : {
        counter: counterSlice.reducer,
        auth : authSlice.reducer
    }
});

export const counterActions =  counterSlice.actions
export const authActions = authSlice.actions;

export default store;

