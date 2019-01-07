import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Restaurants from './components/restaurants/Restaurants.js';

const routes = (
  <Switch>
    <Route path="/" component={Homepage} exact />
    <Route path="/api/restaurants" components={Restaurants} />
  </Switch>
);

export default routes;
