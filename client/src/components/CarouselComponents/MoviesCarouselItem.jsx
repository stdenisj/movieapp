import React from 'react'
import { Accordion, Button } from 'react-bootstrap'

export default function MoviesCarouselItem(props, i, setFoundMovie, keyValue) {
    let image = ''
    if ( props.poster_path ) {
        image = `https://image.tmdb.org/t/p/w200${props.poster_path}`
    } else if ( props.backdrop_path ) {
        image = `https://image.tmdb.org/t/p/w200${props.backdrop_path}`
    } else {
        image = `http://placehold.it/200x200&text=${props.title}`
    }
    return (
        <Accordion.Toggle as={ Button } variant="link" eventKey={keyValue} key={ i }>
                <img
                    className="d-inline w-20 car-image"
                    src={ image }
                    alt="First slide"
                    style={{
                        width: 'fit-content',
                        height: '20vw'
                        }}
                    onClick={ (event) => { event.preventDefault(); 
                                            setFoundMovie(props)} }
                    onMouseEnter={ (event) => { event.preventDefault(); 
                        setFoundMovie(props)} }
                />
        </Accordion.Toggle>
    )
}
