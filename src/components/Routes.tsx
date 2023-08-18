import { Switch, Route } from 'wouter';
import Counter from './Counter';
import Home from './Home';

const AllRoutes = () => (
  <Switch>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/counter">
      <Counter />
    </Route>
  </Switch>
);

export default AllRoutes;
