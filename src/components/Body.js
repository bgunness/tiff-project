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
    // componentDidMount() {

    // }
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