import React, { Component } from 'react'
import { Accordion, Carousel, Container } from 'react-bootstrap'
import MoviesCarouselPage from './MoviesCarouselPage'

export default class MoviesCarousel extends Component {
    state = {
        foundMovie: {},
        genre: this.props.title
    }

    setFoundMovie = (movie) => {
        this.props.setMovie(movie, this.state.genre)
    }

    render() {
        const movieList = this.props.movieList;
        return (
            <Container fluid>
                <h4 style={{ color: 'white', backgroundColor: 'black', margin: '2vh 0'}}>{ this.props.title }</h4>
                    <Carousel interval={1000000000} style={{ width: '100%'}}>
                        { MoviesCarouselPage( movieList.slice(0,5), this.setFoundMovie, this.props.keyValue) }
                        { movieList.length > 5 
                            ? MoviesCarouselPage( movieList.slice(5,10),this.setFoundMovie, this.props.keyValue)
                            : null }
                        { movieList.length > 10
                            ? MoviesCarouselPage( movieList.slice(10,15),this.setFoundMovie, this.props.keyValue)
                            : null }
                        { movieList.length > 15 
                            ? MoviesCarouselPage( movieList.slice(15,20), this.setFoundMovie, this.props.keyValue)
                            : null }
                        { movieList.length > 20
                            ? MoviesCarouselPage( movieList.slice(20,25), this.setFoundMovie, this.props.keyValue)
                            : null }
                        { movieList.length > 25
                            ? MoviesCarouselPage( movieList.slice(25,30), this.setFoundMovie, this.props.keyValue)
                            : null }
                        { movieList.length > 30
                            ? MoviesCarouselPage( movieList.slice(30,35), this.setFoundMovie, this.props.keyValue)
                            : null }
                        { movieList.length > 35
                            ? MoviesCarouselPage( movieList.slice(35,40), this.setFoundMovie, this.props.keyValue )
                            : null }
                    </Carousel>
            </Container>
        )
    }
}
