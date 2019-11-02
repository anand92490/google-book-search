import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

class SearchBooks extends Component {
    state = {
        search: "",
        books: [],
        author: "",
        error: "",
        message: ""
    };

    //function to take value on the search bar input
    handleInputChange = event =>{
        this.setState({ search: event.target.value })
    }


    //function for submit button to trigger the value of the search form
    handleFormSubmit = event =>{
        event.preventDefault();
    }
    
    
    //function to save the books
    handleSavedButton = event =>{
        event.preventDefault();
    }

    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <h1 className="text-white">
                        (React) Google Books Search
                     </h1>
                     <h3 className="text-white">Search for and Save Books of Intere st</h3>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="12">
                            <SearchFrom
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Container>
                    <SearchResult
                        books={this.state.books}
                        handleSavedButton={this.handleSavedButton}
                    />
                </Container>
            </Container>
        );
    }
}

export default SearchBooks;
