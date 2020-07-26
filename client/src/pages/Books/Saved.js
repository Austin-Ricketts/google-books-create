import React, { useEffect, useState } from "react";
import { Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Card from "../../components/Card";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";

function Saved () {
    const [books, setBooks] = useState([])

    useEffect(() => {
        API.getSavedBooks()
        .then(res => {
            setBooks()
        })
      }, [])

      function deleteBook() {
        API.deleteBook()
        .then(setBooks())
      };



    return (
        <Container>
            <List>
                <ListItem>
                {   books.length ? (
                        <List>
                            {books.map(book => {
                            return (
                                <Card 
                                    key={book._id}
                                    title={book.volumeInfo.title}
                                    authors={book.volumeInfo.authors.join(", ")}
                                    description={book.volumeInfo.description}
                                    infoLink={book.volumeInfo.infoLink}
                                    imageLinks={book.volumeInfo.imageLinks.thumbnail}
                                >
                                <DeleteBtn onClick={() => deleteBook(book._id)} />
                                </Card>
                            );
                            })}
                        </List>
                        ) : (
                        <h3>No Results to Display</h3>
                        )}
                </ListItem>
            </List>
        </Container>
    )
    
}

export default Saved;