import React from 'react'
import { Accordion, Button } from 'react-bootstrap'

export default function MoviesCarouselItem(props, i, setFoundMovie) {
    const image = `https://image.tmdb.org/t/p/w200${props.poster_path}`
    
    return (
        <Accordion.Toggle as={ Button } variant="link" eventKey='0' key={ i }>
            <a href='#' className='car-image' >
                <img
                    className="d-inline w-20"
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
            </a>
        </Accordion.Toggle>
    )
}
