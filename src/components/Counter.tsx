import { useAtom } from 'jotai';
import { counterState } from '../state/CountState';

const Counter = () => {
  const [count, setCount] = useAtom(counterState);

  const incrementCount = () => setCount((prevCount) => prevCount + 1);
  const decrementCount = () => setCount((prevCount) => prevCount - 1);

  return (
    <div>
      <h3>Count:</h3>
      <h5>{count}</h5>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
};

export default Counter;
