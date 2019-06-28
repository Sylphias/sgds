import React, { Component } from 'react';
import MainNav from './MainNav';

class LearnReactApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navBar: {
                brand: {
                    name: 'SGDS',
                    img: {
                        src: '/assets/img/logo_sgds.png',
                        alt: '',
                    },
                    link: '/',
                },
                links: [
                    {
                        name: 'Who we are',
                        link: '/who-we-are',
                    },
                    {
                        name: 'What we do',
                        link: '/what-we-do',
                    },
                    {
                        name: 'Products',
                        link: '/products',
                    },
                    {
                        name: 'Contact',
                        link: '/contact',
                    },
                ],
            },
        };
    }
    render() {
        return (
            <div id="learn-react">
                <div className="main-nav">
                    <MainNav
                        links={this.state.navBar.links}
                        brand={this.state.navBar.brand}
                    />
                </div>
            </div>
        );
    }
}

export default LearnReactApp;
