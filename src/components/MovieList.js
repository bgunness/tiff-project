import React from 'react'

export default function MovieList(props) {
    console.log(props)
    return(
        <li>{props.movie.original_title} {props.movie.release_date}</li>
    )
}