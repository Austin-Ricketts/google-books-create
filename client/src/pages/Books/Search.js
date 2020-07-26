import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn, Input } from "../../components/Form";
import { List, ListItem } from "../../components/List";
import SaveBtn from "../../components/SaveBtn";
import API from "../../utils/API";

function Search () {
    const [books, setBooks] = useState([])
    const [inputObject, setinputObject] = useState({
        title: "",
        author: ""
    })

    useEffect(() => {
      loadBooks()
    }, [])
  
    // Loads all books and sets them to books
    function loadBooks() {
      console.log("load books from search.js : ");
      API.getBooks()
        .then(res => 
          setBooks(res.data.items)
        )
        .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setinputObject({...inputObject, [name]: value})
    };

    function handleFormSubmit(event) {
      event.preventDefault();
      if (inputObject.title && inputObject.author) {
        API.getBooks(inputObject.title)
        .then(res => 
          setBooks(res.data.items)
        )
        .catch(err => console.log(err));
      }
    };

    return (
        <Container fluid>
            <Row>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
                value={inputObject.title}
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Author (required)"
                value={inputObject.author}
              />
              <FormBtn
                disabled={!(inputObject.author && inputObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
            </Row>
            <Row>
            {books.length ? (
              <List>
                {books.map(book => {
                  return (
                    <ListItem key={book.id}>
                        <p>{book.volumeInfo.title}</p>
                        <p>{book.volumeInfo.authors.join(", ")}</p>
                        <p>{book.volumeInfo.description}</p>
                        <a href={book.volumeInfo.imageLinks.thumbnail}></a>
                      {/* need to make this a save button */}
                      {/* <SaveBtn onClick={() => deleteBook(book._id)} /> */}
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </Row>
        </Container>
    )

}

export default Search;