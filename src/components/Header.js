import React, {Component} from 'react';
import {hydrateRoot} from "react-dom/client";

class Header extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <div className="logo me-5"><h1><a href="/">GALERY</a></h1></div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Connect</a>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search..."
                                       aria-label="Search..."/>
                                <button className="btn btn-search" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>

        );
    }
}

export default Header;