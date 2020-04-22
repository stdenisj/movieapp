import React, { Component } from 'react'
import { Accordion, Carousel, Container } from 'react-bootstrap'
import MoviesCarouselPage from './MoviesCarouselPage'

export default class MoviesCarousel extends Component {

    render() {
        const movieList = this.props.movieList;
        return (
            <Container fluid>
                <h4 style={{ color: 'white', backgroundColor: 'black', margin: '2vh 0'}}>{ this.props.title }</h4>
                    <Carousel interval={1000000000} style={{ width: '100%'}}>
                        { MoviesCarouselPage( movieList.slice(0,5), this.props.setMovie    ) }
                        { MoviesCarouselPage( movieList.slice(5,10),   ) }
                        { MoviesCarouselPage( movieList.slice(10,15),  ) }
                        { MoviesCarouselPage( movieList.slice(15,20),  ) }
                        { MoviesCarouselPage( movieList.slice(20,25),  ) }
                        { MoviesCarouselPage( movieList.slice(25,30),  ) }
                        { MoviesCarouselPage( movieList.slice(30,35),  ) }
                        { MoviesCarouselPage( movieList.slice(35,40),  ) }
                        </Carousel>
            </Container>
        )
    }
}
