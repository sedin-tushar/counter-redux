import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store.ts";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  decrementAsync,
  decrementByAmount,
} from "../state/counter/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(incrementAsync(10))}>Increment</button>
        <button onClick={() => dispatch(decrementByAmount(12))}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;