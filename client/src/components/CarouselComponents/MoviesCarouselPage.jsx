import React from 'react'
import { Carousel } from 'react-bootstrap'
import MoviesCarouselItem from './MoviesCarouselItem'

export default function MoviesCarouselPage(props, setFoundMovie ) {
    return (
        <Carousel.Item style={{ height: '40vh' }}>
            { props.map( (movie, i) => {
                return MoviesCarouselItem(movie, i, setFoundMovie)
            })
            }
        </Carousel.Item>
    )
}
