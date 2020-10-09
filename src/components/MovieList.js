import React from 'react'

 class MovieList extends React.Component {
    constructor() {
        super()
        this.state = {
            hovered: false
        }
        this.enterHover = this.enterHover.bind(this)
        this.exitHover = this.exitHover.bind(this)
    }
    enterHover(e) {
        this.setState({hovered: true})
        // let id = e.target.id
        let item = e.target
        item.setAttribute('style', 'border-bottom: 1px solid lightslategray;position: relative;left: 10px;')
        // target.classList.add('hover')
    }
    exitHover(e) {
        this.setState({hovered: false})
        let item = e.target
        item.removeAttribute('style', 'border-bottom: 1px solid lightslategray;position: relative;left: 10px;')
        // target.classList.remove('hover')
    }
    render() {
        return(
            <li className='movieListItem' id={this.props.movie.id} onClick={this.props.onClick} onMouseEnter={this.enterHover} onMouseLeave={this.exitHover}>{this.props.movie.original_title} {this.props.movie.release_date}</li>
        )
    }
}

export default MovieList