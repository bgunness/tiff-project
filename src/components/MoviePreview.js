import React from 'react'

class MoviePreview extends React.Component {
    render() {
        return(
            <div className='movieDetails'>
                <h1>{this.props.selected}</h1>
            </div>
        )
    }
}

export default MoviePreview