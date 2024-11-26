import React, { Component } from "react";

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "love", // Default category
            data: {} // Data will be loaded from JSON file
        };
    }

    // Upload JSON file
    componentDidMount() {
        fetch("/db.json")
            .then((response) => response.json())
            .then((data) => this.setState({ data }))
            .catch((error) => console.error("Failed to retrieve data:", error));
    }

    // Change category
    handleCategoryChange = (category) => {
        this.setState({ category });
    };

    render() {
        const { category, data } = this.state;
        const images = data[category] || []; // Get images by current category

        return (
            <div className="container">
                {/* Navbar */}
                <ul className="nav justify-content-center">
                    {Object.keys(data).map((cat) => (
                        <li className="nav-item" key={cat}>
                            <button
                                className={`nav-link btn btn-link cat-link ${category === cat ? "cat-on" : ""}`}
                                onClick={() => this.handleCategoryChange(cat)}
                            >
                                {cat.toUpperCase()}
                            </button>
                        </li>
                    ))}
                </ul>
                <br />
                {/* Image Gallery */}
                <div className="container text-center">
                    <div className="row row-cols-2 row-cols-md-4">
                        {images.map((image) => (
                            <div className="col mb-3" key={image.id}>
                                <img className="img-fluid" src={image.src} alt={image.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;
