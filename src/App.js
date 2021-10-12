import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/Home';
import Contect from './components/Contect';
import About from './components/About';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser ';
import User from './components/users/User';

function App() {
  return (
    <Router>
      <div className="App">
     <Navbar/>
     <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/About" component={About} />
     <Route exact path="/Contect" component={Contect} />
     <Route exact path="/users/add" component={AddUser} />
     <Route exact path="/users/edit/:id" component={EditUser} />
     <Route exact path="/users/:id" component={User} />
     <Route component={ErrorPage} />
     <Home/>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
