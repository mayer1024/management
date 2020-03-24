import React from "react";
import Pie from "./Pie";
import Line from './Line';
import PictorialBar from "./PictorialBar";
import Scatter from "./Scatter";
import { Route, Switch } from 'react-router-dom';
class Index extends React.Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route path='/home/react' component={Pie}/>
                    <Route path='/home/vue' component={Line}/>
                    <Route path='/home/js' component={PictorialBar}/>
                    <Route path='/home/jquery' component={Scatter}/>
                </Switch>
            </div>
        )
    }
}
export default Index;
