import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NewBounty from './pages/NewBounty'

import Home from './pages/Home';
import Bounties from './pages/Bounties';

export default function Content() { 
  
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/bounties/add" component={NewBounty}/>
        <Route path="/bounties" component={Bounties} />
        {/* TOT add new bounties page */}
      </Switch>
    </main>
  )
}