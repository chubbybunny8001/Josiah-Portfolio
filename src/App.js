import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import ContactPage from './pages/contact';
import Modal  from './components/Experience/modal';

function App() {
  //Logic goes here.
  //class name is = to class
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contactMe" component={ContactPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
