import './App.css';
import {GlobalProvider} from "./context/global-state";
import Home from "./components/home.component";
import AddEmployee from "./components/add-employee.component";
import EditEmployee from "./components/edit-employee.component";
import { Route, Switch } from 'react-router-dom';

function App() {
    return (
        <GlobalProvider>
            <div className="App">
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/add" component={AddEmployee} exact/>
                    <Route path="/edit/:id" component={EditEmployee} exact/>
                </Switch>
            </div>
        </GlobalProvider>
    );
}

export default App;
