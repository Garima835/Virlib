import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../Styling/GenreBooks.css";
import woodTexture from "../Textures/old-wood-planks.jpg";
// import leatherTexture from "../Textures/aged-leather.jpg";
import paperTexture from "../Textures/vellum-paper.avif";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Images/virlib_logo.png";

const GenreBooks = () => {

  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/bookRequest');
  }
  const { subGenre } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("standalone");
  const [searchQuery, setSearchQuery] = useState("");
  
  const standaloneBooks = books.filter(
    (book) => !/book\s?\d+|volume\s?\d+/i.test(book.volumeInfo.title));
  const seriesBooks = books.filter(
    (book) => /book\s?\d+|volume\s?\d+/i.test(book.volumeInfo.title));
  const filteredStandaloneBooks = standaloneBooks.filter((book) =>
    book.volumeInfo.title.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredSeriesBooks = seriesBooks.filter((book) =>
    book.volumeInfo.title.toLowerCase().includes(searchQuery.toLowerCase()));

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${encodeURIComponent(subGenre)}&maxResults=20`);
        const data = await res.json();
        setBooks(data.items || []);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [subGenre]);

  return (
    <div
      className="genre-library-container"
      style={{ backgroundImage: `url(https://images.unsplash.com/photo-1575220360526-be964710f279?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0)` }}
    >
      <header className="genre-library-header" style={{ backgroundImage: `url(${woodTexture})` }}>
        <div className="genre-header-content">
          <img src={logo} alt="VirLib Logo" width="180" height="100" />
          <h1 className="genre-library-title">VirLib</h1>
          <div className="genre-library-logo">
            <i className="fas fa-scroll"></i>
          </div>
        </div>
        <div className="genre-wood-carving"></div>
      </header>

      <main className="genre-library-main">
        <div className="genre-almirah" style={{ backgroundImage: `url(${woodTexture})` }}>
          <div className="genre-shelf-section">
            <div className="genre-section-label">
              <span className="genre-label-text">{subGenre.toUpperCase()}</span>
              <div className="genre-toggle-buttons">
                <button
                  className={`toggle-btn ${activeTab === "standalone" ? "active" : ""}`}
                  onClick={() => setActiveTab("standalone")}
                >
                Standalone
                </button>
                <button
                  className={`toggle-btn ${activeTab === "series" ? "active" : ""}`}
                  onClick={() => setActiveTab("series")}
                >
                Series
                </button>
              </div>
              <span className="genre-label-ornament"></span>
            </div>
            <div className="genre-controls">
  <div className="genre-tabs">
    <button
      className={activeTab === "standalone" ? "active" : ""}
      onClick={() => setActiveTab("standalone")}
    >
      Standalone
    </button>
    <button
      className={activeTab === "series" ? "active" : ""}
      onClick={() => setActiveTab("series")}
    >
      Series
    </button>
  </div>

  <input
    type="text"
    className="genre-search-bar"
    placeholder="Search by book title..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
</div>

            <div className="genre-shelf">
              {/* <div className="genre-shelf-board"></div> */}
              <div className="genre-shelf-content">
                {loading ? (
                  <p className="genre-loading-text">Loading books...</p>
                  ) : activeTab === "standalone" ? (
                    standaloneBooks.length > 0 ? (
                    filteredStandaloneBooks.map((book, index) => (
                    <div key={index} className="genre-genre-book">
                    <div
                      className="genre-book-spine"
                      style={{
                        backgroundImage: `linear-gradient(135deg, var(--leather-light), var(--leather-dark))`,
                      }}
                      >
                      <span className="genre-spine-text">
                        {book.volumeInfo.title}
                      </span>
                    </div>
                  <div
                    className="genre-book-cover"
                    style={{
                      backgroundImage: `url(${book.volumeInfo.imageLinks?.thumbnail || paperTexture})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    >
                    <div className="genre-cover-ornament"></div>
                    </div>
                  </div>
                    ))
                    ) : (
                      <p className="genre-no-books-text">No standalone books found.</p>
                    )
                    ) : (
                      seriesBooks.length > 0 ? (
                      filteredSeriesBooks.map((book, index) => (
                      <div key={index} className="genre-genre-book">
                      <div
                        className="genre-book-spine"
                            style={{
                              backgroundImage: `linear-gradient(135deg, var(--leather-light), var(--leather-dark))`,
                            }}
                      >
                        <span className="genre-spine-text">
                          {book.volumeInfo.title}
                        </span>
                      </div>
                    <div
                      className="genre-book-cover"
                      style={{
                        backgroundImage: `url(${book.volumeInfo.imageLinks?.thumbnail || paperTexture})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                    <div className="genre-cover-ornament"></div>
                    </div>
                   </div>
                  ))
                  ) : (
                <p className="genre-no-books-text">No series books found.</p>
                )
              )}
              </div>
            </div>
          </div>
        </div>
      </main>

<footer
  className="genre-library-footer"
  style={{
    backgroundImage: `url(https://images.unsplash.com/photo-1575220360526-be964710f279?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0)`
  }}
>
  <div className="genre-footer-top">
    <div className="book-not-found">
      <p>Didn't find the book you were looking for?</p>
      <button onClick = { handleNext } className="genre-footer-link send-request-button">
        <i className="fas fa-ankh"></i>Send Book Request
      </button>
    </div>
  </div>

  {/* <div className="genre-footer-content">
    <p className="genre-established">Established Mid-2025</p>
    <div className="genre-footer-links">
      <button className="genre-footer-link"><i className="fas fa-ankh"></i> <strong> About </strong></button>
      <button className="genre-footer-link"><i className="fas fa-quill"></i> <strong> Contact </strong></button>
      <button className="genre-footer-link"><i className="fas fa-infinity"></i> <strong> Help </strong></button>
    </div>
    <p className="genre-hours"><i className="fas fa-hourglass-half"></i> Open 24/7, 365 days a year</p>
  </div> */}
</footer>
    </div>
  );
};

export default GenreBooks;
