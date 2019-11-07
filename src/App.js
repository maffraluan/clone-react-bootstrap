import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import LogOut from './components/Pages/LogOut';
import NoMatch from './components/Pages/NoMatch';
import Layout from './components/layout/Layout';
import NavigationBar from './components/layout/NavigationBar';
import Jumbotron from './components/layout/Jumbotron';

function App(){
    return (
        <React.Fragment>
          <NavigationBar />
            <Jumbotron />
              <Layout>
                <Router>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/logout" component={LogOut} />
                    <Route component={NoMatch} />
                  </Switch>
                </Router>
              </Layout>
        </React.Fragment>
    );
}

export default App;
