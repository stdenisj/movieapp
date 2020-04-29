import React from 'react'
import { Card, Col, Image ,Row } from 'react-bootstrap'

export default function SeachResultsCard(props) {
    
    let image = `https://image.tmdb.org/t/p/w200${props.profile_path}`
    return (
        <Card>
        <Card.Body>
            <Row>
                <Col>
                    <Image fluid src={ image }/>
                </Col>
                <Col>
                    <h3>{ props.name}</h3>
                    <h6>Rating: { props.vote_average }  -  Total votes: { props.vote_count }</h6>
                    <Card.Text>
                    { props.biography }
                    </Card.Text>
                </Col>
            </Row>
        </Card.Body>
    </Card>
    )
}
