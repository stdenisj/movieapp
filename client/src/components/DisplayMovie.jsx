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
                    {/* <Row> */}
                        <Image fluid src={ image }/>
                    {/* </Row>
                    <Row>
                    {/* <iframe
                        width='280'
                        height='157'
                        src='https://www.youtube.com/embed/SUXWAEX2jlg'
                        frameborder='0'
                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                        allowfullscreen='allowfullscreen'
                        ></iframe> */}
                    {/* </Row> */}
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
