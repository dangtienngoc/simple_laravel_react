import React, { Component } from 'react';
import './App.css';

import AddShipping from './containers/AddShipping';
import ListShipping from './containers/ListShipping';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">

                    <Route exact path="/" render={props => {
                        const {hash} = props.location;
                        return hash.includes('addbox') ? <AddShipping/> : <ListShipping/>;
                    }
                    }/>

                </div>
            </Router>

        );
    }
}

export default App;
