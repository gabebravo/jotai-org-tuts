import { Switch, Route } from 'wouter';
import Counter from './Counter';
import Home from './Home';
import ImmerComponent from './ImmerAtom';

const AllRoutes = () => (
  <Switch>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/counter">
      <Counter />
    </Route>
    <Route path="/jotai-immer">
      <ImmerComponent />
    </Route>
  </Switch>
);

export default AllRoutes;
