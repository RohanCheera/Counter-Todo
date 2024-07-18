import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter1,incrementCounter2, decrementCounter1,decrementCounter2, incrementBoth,decrementBoth } from './counterSlice';
import './counter.css';

const Counter = () => {
  const count1 = useSelector((state) => state.counter.counter1);
  const count2 = useSelector((state) => state.counter.counter2);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h2>Duel Counter</h2>
      <div className="counter-display">
        {count1}
      </div>
      <div className="counter-buttons">
        <button className="decrement" onClick={() => dispatch(decrementCounter1())}>- counter1</button>
        <button className="increment" onClick={() => dispatch(incrementCounter1())}>+ counter1</button>
        <button className="incrementByAmount" onClick={() => dispatch(incrementBoth())}>Increment Both</button>
      </div>
      <div className="counter-display">
        {count2}
      </div>
      <div className="counter-buttons">
        <button className="decrement" onClick={() => dispatch(decrementCounter2())}>- counter2</button>
        <button className="increment" onClick={() => dispatch(incrementCounter2())}>+ counter2</button>
        <button className="incrementByAmount" onClick={() => dispatch(decrementBoth())}>Decrement Both</button>
      </div>
    </div>
  );
};

export default Counter;
