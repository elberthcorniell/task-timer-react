import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './containers/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/app" component={() => <>Hello</>} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
