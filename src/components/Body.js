import React, {Component} from 'react'
import MovieList from './MovieList'
import MoviePreview from './MoviePreview'

class Body extends Component {
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }
    componentDidMount() {
        const api_key = process.env.REACT_APP_API_KEY
        // attributes for pages:
            // page: current page, total_pages: 500
        let movies = []
        // for loop, increment page, if popularity >= 10 add to results array
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=primary_release_date.asc&include_adult=false&include_video=false&primary_release_year=2020&page=2`)
            .then(data => data.json())
            .then(movie => movies.push(...movie.results))
            .then(console.log(movies))
    }
    render() {
        return(
            <div className='movieContainer test'>
                <MovieList />
                <MoviePreview />
            </div>
        )
    }
}

export default Body