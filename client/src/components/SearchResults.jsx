import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Accordion, Container, Row} from 'react-bootstrap'
import MoviesCarousel from './CarouselComponents/MoviesCarousel'
import DisplayMovie from './DisplayMovie'
import SearchResultsCard from './SeachResultsCard'
import axios from 'axios'

export default class SearchResults extends Component {
    state = {
        actor: {},
        movie: {},
        movies: [],
        relatedMovies: [],
        single: {},

    }

    componentWillMount() {
        if (this.props.location.results) {
            this.setState({
                single: this.props.location.results[0],
                movies: this.props.location.results[1].results,
                actor: this.props.location.results[2],
                relatedMovies: this.props.location.results[3].cast
            })
        } else {
            this.setState({ noSearch: true })
        }
    }

    getTrailer = async(movie) => {
        try {
            let response = await axios.get(`/api/movies/trailer/${movie.id}`)
            let trailer = `https://www.youtube.com/embed/${response.data}`
            this.setState({ movieTrailer: trailer })
        }
        catch(e){
            console.log(e)
        }
    }

    setMovie = (foundMovie, genre) => { 
        this.setState({ movie: foundMovie})
        this.getTrailer(foundMovie)
    };

    render() {
        let actorMovies = `Movies staring ${ this.state.actor.name }`
        let movieTitles = `Movies with ${ this.props.match.params.input } in the title`
        return (
            this.state.noSearch 
                ? <Redirect to='/' /> 
                : <Container fluid style={{ background: 'rgba(0, 0, 0)'}} >
                        { !this.state.actor || this.state.actor.popularity < 1 
                            ? null
                            : <Row>
                                { SearchResultsCard(this.state.actor) }
                            </Row>
                        }
                    <Row>
                        <Container fluid>
                        <Accordion>
                            { !this.state.actor || this.state.actor.popularity < 1 
                                ? null 
                                : <MoviesCarousel 
                                movieList= { this.state.relatedMovies } 
                                title={ actorMovies }
                                setMovie={ this.setMovie }   
                                keyValue="0"/>
                            }
                            <Accordion.Collapse eventKey="0">
                                <DisplayMovie movie={ this.state.movie } trailer={ this.state.movieTrailer }/>
                            </Accordion.Collapse>
                            <MoviesCarousel 
                                    movieList={ this.state.movies } 
                                    title={ movieTitles } 
                                    setMovie={ this.setMovie }   
                                    keyValue="1"/>
                            <Accordion.Collapse eventKey="1">
                                    < DisplayMovie movie={ this.state.movie } trailer={ this.state.movieTrailer }/>
                            </Accordion.Collapse>
                        </Accordion>
                        </Container>
                    </Row>
                </Container>
        )
    }
}
