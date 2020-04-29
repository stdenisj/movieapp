import React, { Component } from 'react'
import { Button, Card, Col, Image ,Row } from 'react-bootstrap'

export default class DisplayMovie extends Component {
    state = {
        play: false
    }

    toggleTrailer = () => {
        this.setState({ play: !this.state.play })
    }

    render() {
        let movie = this.props.movie
        let image = ''
        if ( movie.backdrop_path ) {
            image = `https://image.tmdb.org/t/p/w400${movie.backdrop_path}`
        } else {
            image = `https://image.tmdb.org/t/p/w400${movie.poster_path}`
        }
        return (
            <Card style={{ height: '25vw' }}>
                <Card.Body>
                    <Row>
                        <Col>
                            { this.state.play 
                            ? <iframe
                                title='movietrailer'
                                width='400'
                                height='225'
                                src={ movie.trailer }
                                frameBorder='0'
                                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen='allowfullscreen'
                                ></iframe>
                            : <Image src={ image } style={{ width:'400px', height:'225px' }}/> 
                        }
                            <div style={{ margin: '5px' }}>
                                <Button onClick={ this.toggleTrailer } size='sm'>
                                    { this.state.play
                                        ? 'Close Trailer'
                                        : 'Play Trailer'
                                    }
                                </Button>
                            </div>
                        </Col>
                        <Col>
                            <h3>{ movie.title}</h3>
                            <h6>Rating: { movie.vote_average }  -  Total votes: { movie.vote_count }</h6>
                            <Card.Text>
                            { movie.overview }
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}
