import React, { useEffect, useState } from "react";
import { Row, Container } from "../../components/Grid";
import { FormBtn, Input } from "../../components/Form";
import { List, } from "../../components/List";
import Card from "../../components/Card";
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
      API.findBook()
        .then(res => 
          // setBooks(res.data.items)
          console.log(this)
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
        API.findBook(inputObject.title)
        .then(res => 
          // setBooks(res.data.items)
          console.log(res.data.items)
        )
        .catch(err => console.log(err));
      }
    };

    function saveBook() {
      API.saveBook()
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
                    <Card 
                      key={book.id}
                      title={book.volumeInfo.title}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      infoLink={book.volumeInfo.infoLink}
                      imageLinks={book.volumeInfo.imageLinks.thumbnail}
                    >
                      <SaveBtn
                        onClick={() => saveBook(book.id)}
                      ></SaveBtn>
                    </Card>
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