import React from 'react'

export default function MovieList(props) {
    return(
        <li onClick={props.onClick}>{props.movie.original_title} {props.movie.release_date}</li>
    )
}