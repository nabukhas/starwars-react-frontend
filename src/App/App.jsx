import React from 'react';
import { Router, Route, Link } from 'react-router-dom';

import { history } from '@/_helpers';
import { authenticationService } from '@/_services';
import { dataService } from '@/_services';
import { PrivateRoute } from '@/_components';
import { HomePage } from '@/HomePage';
import './style.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Router history={history}>
                <div id="head"></div>
                <div id="content">
                    <div className="jumbotron black-back">
                        <div className="container">
                            <div className="row">
                                <PrivateRoute exact path="/" component={HomePage} />
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export { App }; 