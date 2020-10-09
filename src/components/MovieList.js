import React from 'react'

 class MovieList extends React.Component {
    constructor() {
        super()
        this.enterHover = this.enterHover.bind(this)
        this.exitHover = this.exitHover.bind(this)
    }
    enterHover(e) {
        let item = e.target
        item.setAttribute('style', 'border-bottom: 1px solid lightslategray;position: relative;left: 10px;')
    }
    exitHover(e) {
        let item = e.target
        item.removeAttribute('style', 'border-bottom: 1px solid lightslategray;position: relative;left: 10px;')
    }
    render() {
        return(
            <li className='movieListItem' id={this.props.movie.id} onClick={this.props.onClick} onMouseEnter={this.enterHover} onMouseLeave={this.exitHover}>{this.props.movie.original_title}</li>
        )
    }
}

export default MovieList