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
    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <h1 className="text-white">
                        Find your Favourite Book with GoogleBook API
                     </h1>
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
