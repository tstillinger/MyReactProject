import React, { Component } from 'react';
import Directory from './GalleryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { GALLERY } from '../shared/gallery';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gallery: GALLERY,
        };
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    gallery={this.state.gallery.filter(gallery => gallery.featured)[0]}
                />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory gallery={this.state.gallery} />} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;