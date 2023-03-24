import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import Company from './pages/company';
import EnderPage from './pages/Ender';
import AnycubicPage from './pages/Anycubic';
import ElektroplatingPage from './pages/ElektroplatingPage';
import PaintPage from './pages/PaintPage';
import SzemuvegPage from './pages/Szemuveg';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/company" component={Company} exact />
        <Route path="/Ender" component={EnderPage} exact />
        <Route path="/Anycubic" component={AnycubicPage} exact />
        <Route path="/ElektroplatingPage" component={ElektroplatingPage} exact />
        <Route path="/PaintPage" component={PaintPage} exact />
        <Route path="/SzemuvegPage" component={SzemuvegPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
