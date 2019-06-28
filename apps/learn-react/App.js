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
                <div className="sgds-masthead">
                    <div className="sgds-container">
                        <div className="row">
                            <div className="col has-text-centered-touch">
                                <a href="https://www.gov.sg" target="_blank">
                                    <span className="sgds-icon sgds-icon-sg-crest" />
                                    <span className="is-text">
                                        A Singapore Government Agency Website
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-nav">
                    <MainNav
                        links={this.state.navBar.links}
                        brand={this.state.navBar.brand}
                    />
                </div>
                <section className="sgds-section">
                    <div className="sgds-container">
                        <h2>This is a React App</h2>
                        <p>This page (aside from the footer below) was built with SGDS and React</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default LearnReactApp;
