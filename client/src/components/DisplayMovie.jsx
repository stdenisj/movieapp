import React from 'react'
import { Card } from 'react-bootstrap'

export default function DisplayMovie(props) {
    let image = `https://image.tmdb.org/t/p/w300${props.backdrop_path}`
    
    return (
    <Card style={{ height: '25vw' }}>
        <Card.Body>
            <Card.Img variant="Left" src={ image } width='300vw'/>
            <Card.Title>{ props.title}</Card.Title>
            <Card.Text>
            { props.overview }
            </Card.Text>
        </Card.Body>
    </Card>
    )
}
