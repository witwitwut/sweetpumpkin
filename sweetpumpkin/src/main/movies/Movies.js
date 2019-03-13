import React from "react"
import MovieListItem from "./MovieListItem"
import "./Movies.css"
import Button from "../navigation/Button"


const Movies = ({movies, page, onPageIncreases, onPageDecrease}) => (
    <section>
            <ul className="movies">
                {movies.map( movie => (
                    <MovieListItem key={movie.id} movie={movie} />
                    ))
                }
            </ul>
            <div className="pagination">
                <Button onClick={onPageDecrease}>Previous</Button>
                <span>{`Page ${page}`}</span>
                <Button onClick={onPageIncreases}>Next</Button>
            </div>                
        </section>  
)





export default Movies