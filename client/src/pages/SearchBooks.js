import React, { Component } from "react";
import API from '../utils/API'
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult";

class SearchBooks extends Component {
    state = {
        search: "",
        books: [],
        author: "",
        error: "",
        message: ""
    };

    //function to take value on the search bar input
    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    //function for submit button to trigger the value of the search form
    handleFormSubmit = event => {
        event.preventDefault();
        // once it clicks it connects to the google book api with the search value
        API.getGoogleSearchBooks(this.state.search)
            .then(res => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                } else {
                    // store response in a array
                    let results = res.data.items;
                    //map through the array
                    results = results.map(result => {
                        //store each book information in a new object
                        result = {
                            key: result.id,
                            id: result.id,
                            title: result.volumeInfo.title,
                            author: result.volumeInfo.authors,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink
                        };
                        return result;
                    });
                    // reset the sate of the empty books array to the new arrays of objects with properties geting back from the response
                    this.setState({ books: results, error: "" });
                }
            })
            .catch(err => this.setState({ error: err.items }));
    };

    //function to save the books
    handleSavedButton = event => {
        //console.log(event)
        event.preventDefault();
        console.log(this.state.books);
        let savedBooks = this.state.books.filter(book => book.id === event.target.id)
        savedBooks = savedBooks[0];
        API.saveBook(savedBooks)
            .then(this.setState({ message: alert("Your book is saved") }))
            .catch(err => console.log(err))
    };

    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <h1 className="text-white">(React) Google Books Search</h1>
                    <h3 className="text-white">Search for and Save Books of Interest</h3>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="12">
                            <SearchForm
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
