import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const cor = useSelector(state => state.counter)

  const incrementHandler =()=>{
    dispatch({
      type: 'increment'
    })
  }

  const decrementHandler =()=>{
    dispatch({
      type: 'decrement'
    })
  }

  const increaseHandler =()=>{
    dispatch({
      type: 'increase',
      amount : 5
    })
  }

  const resetHandler =()=>{
    dispatch({
      type: 'reset',
    })
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{cor}</div>
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
