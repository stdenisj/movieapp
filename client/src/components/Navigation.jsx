import axios from 'axios'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap'

export default class Navigation extends Component {
    state = {
        formInput: '',
        submit: false,
        home: false,
        results: []
    }

    handleFormChange = (event) => {
        let input = event.target.value;
        this.setState({ formInput: input })
    }

    submitSearch = async(event) => {
        event.preventDefault();
        let res = await axios.get(`/api/movies/:${this.state.formInput}`);
        let data = res.data;
        this.returnHome()
        this.setState({ submit: true, results: data })
        this.setState({ submit: false, home: false })
    }

    returnHome = () => {
        this.setState({ home: true })
    }
    render() {
        return (
            <Navbar bg="dark" variant='dark' expand="lg">
            <Navbar.Brand href="/">Movies</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link onClick={ this.returnHome }>Home</Nav.Link>
                </Nav>
                <Form inline onSubmit={ this.submitSearch }>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={ this.handleFormChange } />
                    <FormControl variant="outline-success" type='submit' value="Search"/>
                </Form>
            </Navbar.Collapse>
                { this.state.submit ? <Redirect to={{ pathname: `/search/${this.state.formInput}`,  results: this.state.results }} /> : null }
                { this.state.home ? <Redirect to='/'/> : null }
            </Navbar>
        )
    }
}
