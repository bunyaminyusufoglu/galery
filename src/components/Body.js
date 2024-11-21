import React, {Component} from 'react';


class Body extends Component {
    render() {
        return (
            <div className="container">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">ghj</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                </ul>
                <br/>
                <div className="container text-center">
                    <div className="row row-cols-2 row-cols-md-4">
                        <div className="col mb-3">
                            <img className="img-fluid" src="../images/sevgi/1.webp" alt=""/>
                        </div>
                        <div className="col mb-3">
                            <img className="img-fluid" src="../images/sevgi/2.jpg" alt=""/>
                        </div>
                        <div className="col mb-3">
                            <img className="img-fluid" src="../images/sevgi/3.webp" alt=""/>
                        </div>
                        <div className="col mb-3">
                            <img className="img-fluid" src="../images/sevgi/4.jpg" alt=""/>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Body;