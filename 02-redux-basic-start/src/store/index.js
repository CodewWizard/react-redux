import {createStore} from 'redux';

const counteReducer =(state={counter:0}, action)=>{
    if(action.type === 'increment'){
        return{
            counter : state.counter + 1
        }
    }

    if(action.type === 'decrement'){
        return{
            counter : state.counter - 1
        }
    }

    if(action.type === 'increase'){
        return{
            counter : state.counter + action.amount
        }
    }

    if(action.type === 'reset'){
        return{
            counter : 0
        }
    }

    return state;
}

const store = createStore(counteReducer);

export default store;

