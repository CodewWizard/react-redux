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
}

const store = createStore(counteReducer);

export default store;