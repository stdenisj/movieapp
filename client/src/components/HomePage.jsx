import axios from 'axios'
import MoviesCarousel from './CarouselComponents/MoviesCarousel'
import DisplayMovie from './DisplayMovie'
import React, { Component } from 'react'
import { Accordion, Container } from 'react-bootstrap'


export default class HomePage extends Component {
    state = {      
        act: [],
        adv: [],
        com: [],
        fam: [],
        thr: [],
        Action: {},
        Adventure: {},
        Comedy: {},
        Family: {},
        Thriller: {},
        movieTrailer: '',       
    }

        getActMovies = async() => {
            try {
                let res = await axios.get('/api/movies/action');
                const data = res.data;
                this.setState({ act: data.act });
            }
            catch(e) {
                console.log(e)
            }
        }
        getAdvMovies = async() => {
            try {
                let res = await axios.get('/api/movies/adventure');
                const data = res.data;
                this.setState({ adv: data.adv });
            }
            catch(e) {
                console.log(e)
            }
        }
        getComMovies = async() => {
            try {
                let res = await axios.get('/api/movies/comedy');
                const data = res.data;
                this.setState({ com: data.com });
            }
            catch(e) {
                console.log(e)
            }
        }
        getFamMovies = async() => {
            try {
                let res = await axios.get('/api/movies/family');
                const data = res.data;
                this.setState({ fam: data.fam });
            }
            catch(e) {
                console.log(e)
            }
        }
        getThrMovies = async() => {
            try {
                let res = await axios.get('/api/movies/thriller');
                const data = res.data;
                this.setState({ thr: data.thr, });
            }
            catch(e) {
                console.log(e)
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

    componentWillMount() {
        this.getActMovies();
        this.getAdvMovies();
        this.getComMovies();
        this.getFamMovies();
        this.getThrMovies();
    }
    
    setMovie = (foundMovie, genre) => {
        if( genre === 'Action') {
            this.setState({ Action: foundMovie,})
        } else if (genre === 'Adventure') {
            this.setState({ Adventure: foundMovie})
        } else if (genre === 'Comedy') {
            this.setState({ Comedy: foundMovie})
        } else if (genre === 'Family') {
            this.setState({ Family: foundMovie})
        } else {
            this.setState({ Thriller: foundMovie})
        }
        this.getTrailer(foundMovie)
    }

    render() {
        return (
            <Container 
                fluid
                style={{
                    height: '100%',
                    background: 'rgba(0, 0, 0)'
                }}>
                <Accordion>
                    <MoviesCarousel movieList={ this.state.act } title='Action'     setMovie={ this.setMovie }   keyValue="0"/>
                    <Accordion.Collapse eventKey="0">
                        <DisplayMovie movie={ this.state.Action } trailer={ this.state.movieTrailer }/>
                    </Accordion.Collapse>

                    <MoviesCarousel movieList={ this.state.adv } title='Adventure'  setMovie={ this.setMovie }  keyValue="1"/>
                    <Accordion.Collapse eventKey="1">
                        < DisplayMovie movie={ this.state.Adventure } trailer={ this.state.movieTrailer }/>
                    </Accordion.Collapse>

                    <MoviesCarousel movieList={ this.state.com } title='Comedy'     setMovie={ this.setMovie }  keyValue="2"/>
                    <Accordion.Collapse eventKey="2">
                        < DisplayMovie movie={ this.state.Comedy } trailer={ this.state.movieTrailer }/>
                    </Accordion.Collapse>

                    <MoviesCarousel movieList={ this.state.fam } title='Family'     setMovie={ this.setMovie }  keyValue="3"/>
                    <Accordion.Collapse eventKey="3">
                        < DisplayMovie movie={ this.state.Family } trailer={ this.state.movieTrailer }/>
                    </Accordion.Collapse>

                    <MoviesCarousel movieList={ this.state.thr } title='Thriller'   setMovie={ this.setMovie }  keyValue="4"/>
                    <Accordion.Collapse eventKey="4">
                        < DisplayMovie movie={ this.state.Thriller } trailer={ this.state.movieTrailer }/>
                    </Accordion.Collapse>
                </Accordion>
            </Container>
        )
    }
}
