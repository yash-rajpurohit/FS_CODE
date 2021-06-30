import './App.css';
import {Route, BrowserRouter, Router, Switch} from 'react-router-dom'
import GetPost from './components/GetPost';
import GetComments from './components/GetComments';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path='/getpost' component = {GetPost} />
        <Route path='/getcomments' component = {GetComments} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
