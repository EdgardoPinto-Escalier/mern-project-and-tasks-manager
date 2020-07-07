import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import CreateAccount from './components/auth/CreateAccount';
import Projects from './components/projects/Projects';
import ProjectState from './context/projects/projectState';
import TaskState from './context/tasks/taskState';
import AlertState from './context/alerts/alertState';
import AuthenticationState from './context/authentication/authenticationState';

function App() {
  console.log(process.env.REACT_APP_BACKEND_URL);
  return (
    <ProjectState>
      <TaskState>
        <AlertState>
          <AuthenticationState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/create-account" component={CreateAccount} />
                <Route exact path="/projects" component={Projects} />
              </Switch>
            </Router>
          </AuthenticationState>
        </AlertState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
