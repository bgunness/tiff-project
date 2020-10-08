import React, {Component} from 'react'
import MovieList from './MovieList'
import MoviePreview from './MoviePreview'

class Body extends Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            selectedId: ''
        }
        this.onClickFunction = this.onClickFunction.bind(this)
    }
    onClickFunction(e) {
        this.setState({selectedId: e.target.id})
    }
    compare(i, j) {
        if (i.release_date < j.release_date) {
            return -1;
        } else if (i.release_date > j.release_date) {
            return 1;
        }
        return 0;
    }
    async componentDidMount() {
        let movies = []
        let page = 1
        let p = true
        const api_key = process.env.REACT_APP_API_KEY
        /* The operation below is done to return the number of pages which need to be iterated - 500 in this case */
        const totalPages = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=primary_release_date.asc&include_adult=false&include_video=false&primary_release_year=2020&page=${page}`)
            .then(data => data.json())
            .then(moviesData => moviesData.total_pages)
        
    /*  This function will only do fetch calls until p = false, which occurs after the first movie with popularity < 10 is reached.
        Data coming in is already sorted by popularity, so assuming the API is working as intended, no desired data should be missed.
    */

        for (page, totalPages, movies; page <= totalPages; page++) { //for every page between 1 & 500 inclusive
            if (p) {
            await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&primary_release_year=2020&page=${page}`)
                .then(data => data.json())
                .then(resultPage => {
                    try {
                        for (let i = 0; i < resultPage.results.length; i++) {
                            if (resultPage.results[i].popularity >= 10.0) {
                                movies.push(resultPage.results[i])
                            } else if (resultPage.results[i].popularity < 10.0){
                                p = false
                                break //ensures inner for loop terminates once popularity < 10
                            }
                        }
                    } catch (err) {console.log(err)}
                })
            } else {break} //ensures outer for loop terminates once popularity < 10
        }

    /* 
        This function below fetches all 500 pages of movies from 2020, then filters out the data with undesirable attribute values.
        The final array does not need to be further sorted by date, however this is much less efficient over the network.
    */

        // for (movies; page <= totalPages; page++) {
        //     await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=primary_release_date.asc&include_adult=false&include_video=false&primary_release_year=2020&page=${page}`)
        //         .then(data => data.json())
        //         .then(resultPage => {
        //             let popular = resultPage.results.filter(movie => movie.popularity >= 10.0)
        //             movies.push(...popular)
        //         })
        // }
        movies.sort(this.compare)
        // console.log(movies[0].id)
        this.setState({
            movies: movies,
            selectedId: movies[0].id.toString()
        })
        // console.log(this.state.selectedId)
    }
    render() {
        return(
            <div className='movieContainer test'>
            <ol className='movieList'>
                {this.state.movies.map(movie => <MovieList key= {movie.id} movie={movie} onClick={this.onClickFunction}/>)}
            </ol>
                <MoviePreview movie={this.state.movies} selected={this.state.selectedId} />
            </div>
        )
    }
}

export default Body