import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import RisksStore from '@logistics-calc/risks/src/domain/data/RisksStore';
import RisksService from '@logistics-calc/risks/src/domain/services/RisksService';

import CompaniesTablePage from './companies/ui/CompaniesTablePage';
import EditCompanyPage from './companies/ui/EditCompanyPage';
import CreateCompanyPage from './companies/ui/CreateCompanyPage';
import CompaniesStore from '@logistics-calc/companies/src/domain/data/CompaniesStore';
import CompaniesService from '@logistics-calc/companies/src/domain/services/CompaniesService';
import LoginPage from './auth/ui/LoginPage';
import SecureRoute from './auth/ui/SecureRoute';
import AppContext from './AppContext';

import './App.css';

const dbUrl =
  'https://609ce380-698c-48ed-a70f-6eefc8446f54-bluemix:ee5cf67260942c15b000fceeede84f7762628d5fbdf85a83d26bf4225656e333@609ce380-698c-48ed-a70f-6eefc8446f54-bluemix.cloudantnosqldb.appdomain.cloud';

const companiesStore = CompaniesStore({ dbUrl });
const companiesService = CompaniesService({ companiesStore });
const risksStore = RisksStore({ dbUrl });
const risksService = RisksService({ risksStore });

function App() {
  return (
    <div className="App">
      <AppContext.Provider
        value={{
          services: { companies: companiesService, risks: risksService }
        }}
      >
        <Router>
          <Switch>
            <Route path="/login" component={LoginPage} />

            <SecureRoute>
              <Route exact path="/" component={CompaniesTablePage} />
              <Route exact path="/company/" component={CreateCompanyPage} />
              <Route path="/company/:id" component={EditCompanyPage} />
            </SecureRoute>
          </Switch>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
