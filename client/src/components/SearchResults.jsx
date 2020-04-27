import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Accordion, Container, Row} from 'react-bootstrap'
import MoviesCarousel from './CarouselComponents/MoviesCarousel'
import DisplayMovie from './DisplayMovie'
import SearchResultsCard from './SeachResultsCard'

export default class SearchResults extends Component {
    state = {
        movie: {},
        single: this.props.location.results[0],
        movies: this.props.location.results[1].results,
        actor: this.props.location.results[2].results[0]
    }

    componentWillMount() {
        if (this.props.location.results) {
            this.setState({
                single: this.props.location.results[0],
                movies: this.props.location.results[1].results,
                actor: this.props.location.results[2].results[0]
            })
        } else {
            this.setState({ noSearch: true })
        }
    }


    setMovie = (foundMovie, genre) => { this.setState({ movie: foundMovie}) };

    render() {
        return (
            this.state.noSearch 
                ? <Redirect to='/' /> 
                : <Container fluid style={{ height: '100vh', background: 'rgba(0, 0, 0)'}} >
                    <Accordion>
                        { this.state.actor.popularity < 10 || this.state.actor.popularity == undefined
                            ? null
                            : SearchResultsCard(this.state.actor)
                        }
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
                </Container>
        )
    }
}
