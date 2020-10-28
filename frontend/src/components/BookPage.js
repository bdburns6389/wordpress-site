import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

export class BookPage extends React.Component {
  state = {
    book: {},
    isLoaded: false,
  };

  componentDidMount() {
    axios
      .get(`/wp-json/wp/v2/books/${this.props.match.params.id}`)
      .then((res) =>
        this.setState({
          book: res.data,
          isLoaded: true,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    const { book, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <Fragment>
          <Link to="/">Go back</Link>
          <hr />
          <h1>{book.title.rendered}</h1>
          <div dangerouslySetInnerHTML={{ __html: book.content.rendered }} />
          <h4>Publisher: {book.acf.publisher}</h4>
        </Fragment>
      );
    }

    return <h3>Loading...</h3>;
  }
}

export default BookPage;
