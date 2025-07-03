import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "Inception", release_date: "2010-07-16" },
        { id: 2, title: "Interstellar", release_date: "2014-11-07" },
        { id: 3, title: "The Dark Knight", release_date: "2008-07-18" },
        { id: 4, title: "Pulp Fiction", release_date: "1994-10-14" }
    ]

    const handleSearch = () => {
        e.preventDefault();
        alert({ searchQuery });
        setSearchQuery("");
    }
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for a movies..." className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map(movie =>
                (
                    <MovieCard movie={movie} key={movie.id} />))}
            </div>
        </div>
    );
}

export default Home;
