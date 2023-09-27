import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import {counterActions} from '../store/index'

const Counter = () => {
  const dispatch = useDispatch();
  const cor = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.showCounter)

  const incrementHandler =()=>{
    dispatch(counterActions.increment())
  }

  const decrementHandler =()=>{
    dispatch(counterActions.decrement())
  }

  const increaseHandler =()=>{
    dispatch(counterActions.increase(5)) // { type: SOME_UNIQUE_IDENTIFIER, payload: 5 }
  }

  const resetHandler =()=>{
    dispatch(counterActions.reset())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{cor}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
