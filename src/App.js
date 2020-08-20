import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { authenticateSession } from './api/authenticate';
import Index from './pages/index/Index.Container';
import UserLogin from './pages/User/Login.Container';
import AllUser from './pages/User/AllUser.Container';
import Dinner from './pages/User/Dinner.Container';
import Breakfast from './pages/User/Breakfast.Container';
import Lunch from './pages/User/Lunch.Container';
import EditUser from './pages/User/EditUser.Container';
import About from './pages/index/About';
import About1 from './pages/User/About';
import Contact1 from './pages/User/Contact'
import AllBreakfast from './pages/User/AllBreakfast.Container';
import Contact from './pages/index/Contact';
import EditBreakfast from './pages/User/EditBreakfast.Container';
import EditLunch from './pages/User/EditLunch.Container';
import AllLunch from './pages/User/AllLunch.Container';
import EditDinner from './pages/User/EditDinner.Container';
import AllDinner from './pages/User/AllDinner.Container'


class App extends Component {
  constructor () {
    super();
    this.state = {
      isGuest: authenticateSession() === true ? true : false
    }
  }

  login = () => {
    this.setState({
      isGuest: false
    });
  }

  logout = () => {
    localStorage.removeItem('LoginToken');
    this.setState({
      isGuest: true
    });
  }

  render() {
    const { isGuest } = this.state;
    return (  
      <BrowserRouter>
      
        <Switch>
          
          <Route exact path='/' render={(props) => <Index {...props} />} />
          <Route exact path='/About' render={(props) => <About {...props} />} />
          <Route exact path='/Contact' render={(props) => <Contact {...props} />} />

        
          <Route exact path="/user/login" render={(props) => isGuest ? <UserLogin {...props} login={this.login} /> : <Redirect to='/user/profile' /> } />
          <Route exact path="/user/profile" render={(props) => !isGuest ?  <AllUser {...props} logout={this.logout} /> : <Redirect to='/user/login' /> } />
          <Route exact path="/user/Dinner" render={(props) => !isGuest ? <Dinner {...props} /> : <Redirect to='/user/login' /> } />
          <Route exact path="/user/breakfast" render={(props) => !isGuest ? <Breakfast {...props} /> : <Redirect to='/user/login' /> } />
          <Route exact path="/user/AllBreakfast" render={(props) => !isGuest ? <AllBreakfast {...props} /> : <Redirect to='/user/login' /> } />
          <Route exact path="/user/EditBreakfast" render={(props) => !isGuest ? <EditBreakfast {...props} /> : <Redirect to='/user/login' /> } />
          <Route exact path="/user/AllLunch" render={(props) => !isGuest ? <AllLunch {...props} /> : <Redirect to='/user/login' /> } />
          <Route exact path="/user/EditLunch" render={(props) => !isGuest ? <EditLunch {...props} /> : <Redirect to='/user/login' /> } /> 
          <Route exact path="/user/AllDinner" render={(props) => !isGuest ? <AllDinner {...props} /> : <Redirect to='/user/login' /> } />
          <Route exact path="/user/EditDinner" render={(props) => !isGuest ? <EditDinner {...props} /> : <Redirect to='/user/login' /> } /> 
          <Route exact path="/user/Lunch" render={(props) => !isGuest ? <Lunch {...props} /> : <Redirect to='/user/login' /> } />
          <Route exact path="/user/edit" render={(props) => !isGuest ? <EditUser {...props} /> : <Redirect to='/user/login' />} />
           <Route exact path="/user/About" render={(props) => !isGuest ? <About1 {...props} /> : <Redirect to='/user/About' />} /> 
           <Route exact path="/user/Contact" render={(props) => !isGuest ? <Contact1 {...props} /> : <Redirect to='/user/Contact' />} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;