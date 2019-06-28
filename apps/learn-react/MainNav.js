import React, { Component } from 'react';
import Brand from './Brand';

class LearnReactApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            burgerActive: false,
        };
    }
    toggleBurger = () => {
        this.setState({
            burgerActive: !this.state.burgerActive,
        });
    };
    render() {
        return (
            <nav className="navbar">
                <div className="sgds-container">
                    <div className="navbar-brand">
                        <Brand
                            img={this.props.brand.img}
                            name={this.props.brand.name}
                            link={this.props.brand.link}
                        />
                        <div
                            className={
                                'navbar-burger burger ' +
                                (this.state.burgerActive ? 'is-active' : '')
                            }
                            onClick={this.toggleBurger}
                        >
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                    <div
                        className={
                            'navbar-menu ' +
                            (this.state.burgerActive ? 'is-active' : '')
                        }
                    >
                        {this.props.links.map((link, index) => {
                            return (
                                <a
                                    className="navbar-item is-uppercase is-tab"
                                    href={link.link}
                                    key={index}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </nav>
        );
    }
}

export default LearnReactApp;
