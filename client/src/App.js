import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

// Screens

import PrivateScreen from "./components/screens/PrivateScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegusterScreen";
import ForgetPasswordScreen from "./components/screens/ForgetPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";


const App = () => {
  return (
    <Router>
      <div className = "app">
      <Routes>
        <PrivateRoute exact path='/' component={PrivateScreen} /> 
        <Route exact path="/login" component={LoginScreen}/>
        <Route exact path="/register" component={RegisterScreen}/>
        <Route exact path="/forget-password" component={ForgetPasswordScreen}/>
        <Route exact path="/reset-password" component={ResetPasswordScreen}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
