import React from 'react';
import Game from '../Boradgame';
import Tutorial from '../tutorial';
import API from '../api';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function Header() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/">Tic-Tac-Toe</Link>
                        <Link className="nav-item nav-link" to="/tutorial">Table</Link>
                        <Link className="nav-item nav-link" to="/api">API</Link>
                    </div>
                </div>
            </nav>
            <div className="container-fluid mt-5">
                <Switch>
                    <Route exact path="/">
                        <Game />
                    </Route>
                    <Route path="/tutorial">
                        <Tutorial />
                    </Route>
                    <Route path="/api">
                        <API />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Header