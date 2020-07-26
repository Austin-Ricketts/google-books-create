import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn, Input } from "../../components/Form";
import { List, ListItem } from "../../components/List";
import ViewBtn from "../../components/ViewBtn";

function Saved () {

    const [books, setBooks] = useState([])



    return (
        <Container>
            <List>
                <ListItem>
                {   books.length ? (
                        <List>
                            {books.map(book => {
                            return (
                                <ListItem key={book._id}>
                                    <p>{book.volumeInfo.title}</p>
                                    <p>{book.volumeInfo.author}</p>
                                    <p>{book.volumeInfo.description}</p>
                                    <a href={book.volumeInfo.imageLinks.thumbnail}></a>
                                <ViewBtn onClick={book.link}></ViewBtn>
                                <DeleteBtn onClick={() => deleteBook(book._id)} />
                                </ListItem>
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