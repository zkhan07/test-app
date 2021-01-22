import React from 'react';
import { lazy, Suspense } from "react";
import './App.css';
import { Route, HashRouter, Switch } from 'react-router-dom';
import {Loader} from './Utils/Loader'
// import Dashboard from './Components/Dashboard/dashboard';
// import { LoginPage } from './Components/LoginPage';
const LoginPage = lazy(() => import('./Components/LoginPage/LoginPage'));
const Dashboard =lazy(()=>import('./Components/Dashboard/Dashboard') )
function App() {


  return (
    <HashRouter>
      <Suspense fallback={<Loader/>}>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path={`/Dashboard`} component={Dashboard} />
        </Switch>
      </Suspense>
    </HashRouter>
  );
}

export default App;
