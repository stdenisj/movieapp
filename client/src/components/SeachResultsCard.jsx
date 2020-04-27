import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

export default function SeachResultsCard(props) {
    return (
        <Card style={{ height: '25vw' }}>
        <Card.Body>
            <Row>
                <Col>
                    {/* <Image fluid src={  }/> */}
                </Col>
                <Col>
                    <h3>{ props.name}</h3>
                    {/* <h6>Rating: { props.vote_average }  -  Total votes: { props.vote_count }</h6> */}
                    <Card.Text>
                    {/* { props.overview } */}
                    </Card.Text>
                </Col>
            </Row>
        </Card.Body>
    </Card>
    )
}
