import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import CreatePost from './components/CreatePost'
import NavBar from './components/NavBar'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Dashboard} exact path='/' />
      <Route component={CreatePost} exact path='/new' />
    </Switch>
    <NavBar />
  </BrowserRouter>
)

export default Router
