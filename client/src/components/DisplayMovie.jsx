import React from 'react'
import { Card, Col, Image ,Row } from 'react-bootstrap'

export default function DisplayMovie(props) {
    let image = ''
    if ( props.backdrop_path ) {
        image = `https://image.tmdb.org/t/p/w300${props.backdrop_path}`
    } else {
        image = `https://image.tmdb.org/t/p/w300${props.poster_path}`
    }
    return (
    <Card style={{ height: '25vw' }}>
        <Card.Body>
            <Row>
                <Col>
                    <Image fluid src={ image }/>
                </Col>
                <Col>
                    <h3>{ props.title}</h3>
                    <h6>Rating: { props.vote_average }  -  Total votes: { props.vote_count }</h6>
                    <Card.Text>
                    { props.overview }
                    </Card.Text>
                </Col>
            </Row>
        </Card.Body>
    </Card>
    )
}
