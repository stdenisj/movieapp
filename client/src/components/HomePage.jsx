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
        Thriller: {}           
    }

        getMovies = async() => {
            try {
                let res = await axios.get('/api/movies');
                const data = res.data;
                this.setState({         
                    act: data.act,
                    adv: data.adv,
                    com: data.com,
                    fam: data.fam,
                    thr: data.thr,
                });
            }
            catch(e) {
                console.log(e)
            }
        }

    componentDidMount() {
        this.getMovies();
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
                        { DisplayMovie(this.state.Action) }
                    </Accordion.Collapse>

                    <MoviesCarousel movieList={ this.state.adv } title='Adventure'  setMovie={ this.setMovie }  keyValue="1"/>
                    <Accordion.Collapse eventKey="1">
                        { DisplayMovie(this.state.Adventure) }
                    </Accordion.Collapse>

                    <MoviesCarousel movieList={ this.state.com } title='Comedy'     setMovie={ this.setMovie }  keyValue="2"/>
                    <Accordion.Collapse eventKey="2">
                        { DisplayMovie(this.state.Comedy) }
                    </Accordion.Collapse>

                    <MoviesCarousel movieList={ this.state.fam } title='Family'     setMovie={ this.setMovie }  keyValue="3"/>
                    <Accordion.Collapse eventKey="3">
                        { DisplayMovie(this.state.Family) }
                    </Accordion.Collapse>

                    <MoviesCarousel movieList={ this.state.thr } title='Thriller'   setMovie={ this.setMovie }  keyValue="4"/>
                    <Accordion.Collapse eventKey="4">
                        { DisplayMovie(this.state.Thriller) }
                    </Accordion.Collapse>
                </Accordion>
            </Container>
        )
    }
}
