import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
    return (
        <Link
            to={{
                pathname: "/movies-detail",
                state: {
                    year,
                    title,
                    summary,
                    poster,
                    genres
                }
            }}
        >
            <div className="movie">
                <img src={poster} alt={title}></img>
                <div>
                    <h3 className="movie_title" style={{ backgroundColor: "" }}>
                        {title}
                    </h3>
                    <h5 className="movie_year">{year}</h5>
                    <ul className="movie_genres">
                        {genres.map((genre, index) => {
                            return (
                                <li key={index} className="genres_list">
                                    {genre}
                                </li>
                            );
                        })}
                    </ul>
                    <p className="movie_summary">{summary.slice(0, 140)}...</p>
                </div>
            </div>
        </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
