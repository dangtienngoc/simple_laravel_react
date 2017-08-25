import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { getAllShippings } from './actions';

import AddShipping from './containers/AddShipping';
import ListShipping from './containers/ListShipping';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class App extends Component {

    componentDidMount() {
        this.props.getAllShippings();
    }

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

const mapDispatchToProps = (dispatch) => ({
    getAllShippings: () => dispatch(getAllShippings())
});

export default connect(null, mapDispatchToProps)(App);
