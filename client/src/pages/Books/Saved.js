import React, { Component } from "react";
import { Container, Row } from "../../components/Grid";
import { List } from "../../components/List";
import Card from "../../components/Card";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";

class Search extends Component {
    state = {
      title: "",
      authors: [],
      books: []
    };
  
    // When the component mounts, get a list of all available base breeds and update this.state.breeds
    componentDidMount() {
      API.getSavedBooks()
          .then(res => 
            this.setState({ books: res.data.items })
          )
          .catch(err => console.log(err));
    }
  
    render() {
      return (
        <Container fluid>
              <Row>
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => {
                    return (
                      <Card 
                        key={book.id}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors.join(", ")}
                        description={book.volumeInfo.description}
                        infoLink={book.volumeInfo.infoLink}
                        imageLinks={book.volumeInfo.imageLinks.thumbnail}
                      >
                        <DeleteBtn
                          onClick={() => API.deleteBook(book.id)}
                        ></DeleteBtn>
                      </Card>
                    );
                  })}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
              </Row>
          </Container>
      );
    }
  }
  
  export default Search;

// function Saved () {
//     const [books, setBooks] = useState([])

//     useEffect(() => {
//         API.getSavedBooks()
//         .then(res => {
//             setBooks()
//         })
//       }, [])

//       function deleteBook() {
//         API.deleteBook()
//         .then(setBooks())
//       };
      
//       return (
//         <Container>
//             <List>
//                 <ListItem>
//                 {   books.length ? (
//                         <List>
//                             {books.map(book => {
//                             return (
//                                 <Card 
//                                     key={book._id}
//                                     title={book.volumeInfo.title}
//                                     authors={book.volumeInfo.authors.join(", ")}
//                                     description={book.volumeInfo.description}
//                                     infoLink={book.volumeInfo.infoLink}
//                                     imageLinks={book.volumeInfo.imageLinks.thumbnail}
//                                 >
//                                 <DeleteBtn onClick={() => deleteBook(book._id)} />
//                                 </Card>
//                             );
//                             })}
//                         </List>
//                         ) : (
//                         <h3>No Results to Display</h3>
//                         )}
//                 </ListItem>
//             </List>
//         </Container>
//     )
    
// }

// export default Saved;