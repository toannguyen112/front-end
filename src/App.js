import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

import "./scss/main.scss";
import "antd/dist/antd.css";
import allActions from "./redux/action";
import { useDispatch } from "react-redux";
import axios from "axios";
import routes from "./routes/routes";
function App() {
  useEffect(() => {
    getProduct();
  }, []);

  const dispatch = useDispatch();
  const getProduct = async () => {
    const res = await axios.get("https://api-ban-hang.herokuapp.com/products");
    dispatch(allActions.productsAction.setProducts(res.data));
  };

  const showRoutes = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }

    return result;
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          <BrowserRouter>
            <Switch>{showRoutes(routes)}</Switch>
          </BrowserRouter>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
