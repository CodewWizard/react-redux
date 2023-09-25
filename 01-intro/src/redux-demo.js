const redux = require('redux');

// responsible for changing the store
// produce new state snapshots
// it will be called redux library
const counterReducer = (state = {counter : 0}, action) => {
    if(action.type === 'INCREMENT'){
        return {
            counter: state.counter + 1
        };
    }
    
    if(action.type === 'DECREMENT'){
        return {
            counter: state.counter - 1
        };
    }

    return state;
};

// store should manage some data 
const store = redux.createStore(counterReducer);

// console.log("initial state ",store.getState());

// subscribe the store
const counterSubscriber = () =>{
    const latestState = store.getState();
    console.log("latest store ",latestState);
};

store.subscribe(counterSubscriber);
store.dispatch({
    type:'INCREMENT'
});

store.dispatch({
    type:'DECREMENT'
});


console.log("state ",store.getState());