import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/gallery" component={Gallery} />
      </Switch>
    </div>
  );
}

export default App;
