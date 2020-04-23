import React from 'react'
import { Card, Col, Image ,Row } from 'react-bootstrap'

export default function DisplayMovie(props) {
    let image = `https://image.tmdb.org/t/p/w500${props.backdrop_path}`
    
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
