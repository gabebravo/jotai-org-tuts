import Counter from './Counter';
import { Provider } from 'jotai';

const CounterProvider = () => {
  return (
    <div>
      <h3>Counter Provider:</h3>
      <Provider>
        <Counter />
      </Provider>
      <Provider>
        <Counter />
      </Provider>
      <Provider>
        <Counter />
      </Provider>
      <Provider>
        <Counter />
      </Provider>
    </div>
  );
};

export default CounterProvider;
