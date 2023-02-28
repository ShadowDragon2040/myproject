import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import Company from './pages/company';
import EnderPage from './pages/Ender';
import AnycubicPage from './pages/Anycubic';
import Elektroplating from './components/Elektroplating';
import Paint from './components/Paint';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/company" component={Company} exact />
        <Route path="/Ender" component={EnderPage} exact />
        <Route path="/Anycubic" component={AnycubicPage} exact />
        <Route path="/Elektroplating" component={Elektroplating} exact />
        <Route path="/Paint" component={Paint} exact />
      </Switch>
    </Router>
  );
}

export default App;
