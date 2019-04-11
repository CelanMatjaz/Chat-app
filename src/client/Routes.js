import { Route, Switch } from 'react-router-dom'; 

import React from 'react';

//Components
import Home from './components/Home';
import Chat from './components/Chat';

const Routes = props => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/chat/:id" component={Chat}/>
        </Switch>
    );
};

export default Routes;