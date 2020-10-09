import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import About from './components/dashboard/About';
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import CreateChallenge from './components/news/CreateChallenge';
import CreateNews from './components/news/CreateNews';
import NewsDetails from './components/news/NewsDetails';
import UserProfile from './users/UserProfile';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <div style={{position:"relative",minHeight:"100vh"}}>
      <div style={{paddingBottom:"2.5rem"}}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/createNews" component={CreateNews} />
          <Route path="/createChallenge" component={CreateChallenge} />
          <Route path="/user" component={UserProfile} />
          <Route path="/news/:id" component={NewsDetails} />
          <Route path="/about" component={About} />
          <Route path="/:id" component={Dashboard} />
        </Switch>
        </div>
      <Footer />
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
