
import './App.css';
import Form from './components/MainLogin'
import Signupform from './components/MainSignup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import FormSuccess from './components/FormSuccess';



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Signup" exact component={Signupform} />

          <Route path="/" exact component={Form} />
          <Route path="/Dashboard" exact componrnt={FormSuccess} />

        </Switch>





      </div>
    </Router>


  );
}

export default App;
