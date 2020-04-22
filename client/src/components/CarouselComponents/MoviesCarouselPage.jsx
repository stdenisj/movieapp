import React from 'react'
import { Carousel } from 'react-bootstrap'
import MoviesCarouselItem from './MoviesCarouselItem'

export default function MoviesCarouselPage(props, setMovie ) {
    return (
        <Carousel.Item style={{ height: '40vh' }}>
            { props.map( (movie, i) => {
                return MoviesCarouselItem(movie, i, setMovie)
            })
            }
        </Carousel.Item>
    )
}
