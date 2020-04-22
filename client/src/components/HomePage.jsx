import axios from 'axios'
import MoviesCarousel from './CarouselComponents/MoviesCarousel'
import React, { Component } from 'react'
import { Accordion, Container } from 'react-bootstrap'


export default class HomePage extends Component {
    state = {      
        movie: {},              
        act: [],
        adv: [],
        com: [],
        fam: [],
        thr: [],
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

    
    setMovie = (foundMovie) => {
        this.setState({ movie: foundMovie })
    }

    render() {
        return (
            <Container 
                fluid
                style={{
                    background: 'rgba(0, 0, 0)'
                }}>
                <Accordion>
                    <MoviesCarousel movieList={ this.state.act } title='Action' setMovie={ this.setMovie }   />
                <Accordion.Collapse eventKey="0">
                    <h1>{ this.state.movie.title }</h1>
                </Accordion.Collapse>
                </Accordion>
                <MoviesCarousel movieList={ this.state.adv } title='Adventure'  />
                <MoviesCarousel movieList={ this.state.com } title='Comedy'     />
                <MoviesCarousel movieList={ this.state.fam } title='Family'     />
                <MoviesCarousel movieList={ this.state.thr } title='Thriller'   />
            </Container>
        )
    }
}
