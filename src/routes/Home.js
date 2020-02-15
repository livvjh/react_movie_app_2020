import React from "react";
import "./Home.css";
import axios from "axios";
import Movie from "../components/Movie";

class Home extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };
    getMovies = async () => {
        const {
            data: {
                data: { movies }
            }
        } = await axios.get(
            "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
        );
        this.setState({ movies, isLoading: false });
    };
    componentDidMount() {
        //render() 이후 실행
        console.log(2);
        this.getMovies();
    }
    render() {
        // 첫번째 실행 (렌더링)
        // 아래의 this.state 값은 초기 state값과 동일
        // 이후 componentDidMount가 실행된 후 getMovies를 통해 axios 결과값을 가져온다
        // 이후 가져온 rs를 this.setState 함수를 통해 값을 초기화 
        // render() 안에 리턴되는 데이터는 this.state를 통해 값을 가져와 브라우저에 렌더링처리

        console.log(1);
        console.log(this.state.movies);
        console.log(this.state.isLoading);
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader_text">Loading..</span>
                    </div>
                ) : (
                  <div className="movies">
                    {movies.map(movie => {
                        return (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        );
                    })}
                  </div>
                )}
            </section>
        );
    }
}

export default Home;
