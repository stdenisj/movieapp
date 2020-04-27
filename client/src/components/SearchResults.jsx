import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Accordion ,Card, Container } from 'react-bootstrap'
import MoviesCarousel from './CarouselComponents/MoviesCarousel'
import DisplayMovie from './DisplayMovie'

export default class SearchResults extends Component {
    state = {
        movie: {}
    }

    componentWillMount() {
        if (this.props.location.results) {
            this.setState({
                single: this.props.location.results[0],
                movies: this.props.location.results[1].results,
                actors: this.props.location.results[2].results
            })
        } else {
            this.setState({ noSearch: true })
        }
    }

    setMovie = (foundMovie, genre) => { this.setState({ movie: foundMovie}) };

    render() {
        return (
            <Container>
                <Accordion>

                <MoviesCarousel 
                    movieList={ this.state.movies } 
                    title='Movies' 
                    keyValue="0" 
                    setMovie={ this.setMovie }   
                    keyValue="0"/>
                <Accordion.Collapse eventKey="0">
                        { DisplayMovie(this.state.movie) }
                </Accordion.Collapse>
                </Accordion>
                { this.state.noSearch ? <Redirect to='/' /> : null }
            </Container>
        )
    }
}
