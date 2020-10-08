import React from 'react'

class MoviePreview extends React.Component {
    constructor() {
        super()
        this.state = {
            genres: [],
            runtime: '',
            desc: '',
            tagline: '',
            title: '',
            posterUrl: ''
        }
        // this.getData = this.getData.bind(this)
    }
    async componentDidUpdate(prevProps) {
        if (this.props.selected !== prevProps.selected) {
            const id = this.props.selected
            const api_key = process.env.REACT_APP_API_KEY
            await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)
                .then(data => data.json())
                .then(details => { console.log(details)
                    this.setState({
                        runtime: details.runtime,
                        desc: details.overview,
                        tagline: details.tagline,
                        genres: details.genres.map(genre => genre.name),
                        posterUrl: 'https://image.tmdb.org/t/p/w500/' + details.poster_path,
                        title: details.original_title
                    })
                })
        }
    }
    render() {
        return(
            <div className='movieDetails'>
                <div className='title'>
                    <h1>{this.state.title}</h1>
                    <h4>{this.state.tagline}</h4>
                    <h5>Runtime: {this.state.runtime} minutes</h5>
                </div>
                <img className='poster' src={this.state.posterUrl} alt={this.state.title + ' Poster'} />
                <div className='details'>
                    <ul>
                        {this.state.genres.map(genre => <li>{genre}</li>)}
                    </ul>
                    <p>{this.state.desc}</p>
                </div>
            </div>
        )
    }
}

export default MoviePreview