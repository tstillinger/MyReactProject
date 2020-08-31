import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';
import { CAMPSITES } from './shared/campsites';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    }

    render() {
        return (
            <div className="App">
                <Navbar dark color="secondary">
                <div className="container">
                    <NavbarBrand href="/">Special T Enterprises</NavbarBrand>
                </div>
                </Navbar>
                <Directory campsites={this.state.campsites} />
            </div>
        );
    }
}

export default App;