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
    async componentDidMount() {
        let movies = []
        let page = 1
        const api_key = process.env.REACT_APP_API_KEY
        /* The operation below is done to return the number of pages which need to be iterated - 500 in this case */
        const totalPages = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=primary_release_date.asc&include_adult=false&include_video=false&primary_release_year=2020&page=${page}`)
            .then(data => data.json())
            .then(moviesData => moviesData.total_pages)
        
    /*  This is the same as the operation beneath it, but this one does not use spread & filter

            for (page, totalPages, movies; page <= totalPages; page++) { //for every page between 1 & 500 inclusive
                await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=primary_release_date.asc&include_adult=false&include_video=false&primary_release_year=2020&page=${page}`)
                    .then(data => data.json())
                    .then(resultPage => {
                        for (let i = 0; i < resultPage.results.length; i++) {
                            if (resultPage.results[i].popularity >= 10.0) {
                                movies.push(resultPage.results[i])
                            }
                        }
                    })
            }
    */

    /* 
        Due to the nature of the Movie Database API, I believe (could be wrong) that a new call needs to be for every page of the results, thus this is a time consuming operation.
        Time is also hindered by the same operation also performing a filter on every page.
    */

        for (movies; page <= totalPages; page++) {
            await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=primary_release_date.asc&include_adult=false&include_video=false&primary_release_year=2020&page=${page}`)
                .then(data => data.json())
                .then(resultPage => {
                    let popular = resultPage.results.filter(movie => movie.popularity >= 10.0)
                    movies.push(...popular)
                })
        }
        this.setState({
            movies: movies
        })
    }
    render() {
        // console.log(this.state.movies)
        return(
            <div className='movieContainer test'>
            <ol className='movieList'>
                {this.state.movies.map(movie => <MovieList movie={movie} />)}
            </ol>
                <MoviePreview />
            </div>
        )
    }
}

export default Body