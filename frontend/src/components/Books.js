import React from "react";
import BookItem from "./BookItem";
import axios from "axios";

export class Books extends React.Component {
  state = {
    books: [],
    isLoaded: false,
  };

  componentDidMount() {
    axios
      .get("/wp-json/wp/v2/books")
      .then((res) => this.setState({ books: res.data, isLoaded: true }))
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state.books);
    const { books, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div>
          {books.map((book) => (
            <BookItem key={book.id} book={book} />
          ))}
        </div>
      );
    }
    return <h3>Loading...</h3>;
  }
}

export default Books;
