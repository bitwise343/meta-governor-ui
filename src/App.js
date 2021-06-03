import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import Home from './pages/Home';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />

                <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/aave-portal">
                    <Home />
                </Route>

                <Route path="/compound-portal">
                    <Home />
                </Route>

                <Route path="/uni-portal">
                    <Home />
                </Route>



                </Switch>
            </Router>
        </div>
    );
}

export default App;
