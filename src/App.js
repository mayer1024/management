import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./views/login";
import Register from "./views/register";
import Home from "./views/home/Home"

class App extends React.Component {
    render() {
        return (
            // <Provider>
                <Router>
                    <Switch>
                        <Route path='/login' component={Login}/>
                        <Route path='/register' component={Register}/>
                        <Route path='/home' component={Home}/>
                        <Route path='/' component={Login}/>
                    </Switch>
                </Router>
            // </Provider>
        )
    }
}

export default App;
