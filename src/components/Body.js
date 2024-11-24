import React, { Component } from "react";

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "huzur", // Varsayılan kategori
            data: {} // Veriler JSON dosyasından yüklenecek
        };
    }

    // JSON dosyasını yükleme
    componentDidMount() {
        // Eğer JSON bir dosya olarak public klasöründeyse, fetch kullanabilirsiniz
        fetch("/db.json")
            .then((response) => response.json())
            .then((data) => this.setState({ data }))
            .catch((error) => console.error("Veriler alınamadı:", error));
    }

    // Kategori değiştirme
    handleCategoryChange = (category) => {
        this.setState({ category });
    };

    render() {
        const { category, data } = this.state;
        const images = data[category] || []; // Mevcut kategoriye göre görüntüleri al

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
                {/* Görüntü Galerisi */}
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
