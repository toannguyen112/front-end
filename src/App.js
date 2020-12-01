import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin_login_screen from './admin/Admin_login_screen'
import Admin_home_screen from './admin/Admin_home_screen';
import HomePage from './screens/HomePage';


import './scss/main.scss';
import 'antd/dist/antd.css';
import DetailPage from './screens/DetailPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/detail" component={DetailPage} />
          <Route path="/admin/login" component={Admin_login_screen} />
          <Route path="/admin/home" component={Admin_home_screen} />
          <Route path="/" component={HomePage} />

        </Switch>
      </Router>


    </div>
  );
}

export default App;
