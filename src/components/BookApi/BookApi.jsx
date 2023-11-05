import "./BookApi.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useItemContext } from "../context/GlobalContext";
import * as actions from "../context/ActionTypes";
const BookApi = () => {
  const context = useItemContext();
  const [bookData, setBookData] = useState(null);
  const handleExite = () => {
    context.setBookName("");
  };
  useEffect(() => {
    const apiKey = "AIzaSyAm3ifh8VIHx8LQFbhhx3CNzLNB_bA7Q0U";
    const baseUrl = "https://www.googleapis.com/books/v1/volumes";

    if (context.bookName) {
      axios
        .get(baseUrl, {
          params: {
            q: context.bookName,
            key: apiKey,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setBookData(response.data.items);
          } else {
            console.log(
              "API request failed with status code:",
              response.status
            );
          }
        })
        .catch((error) => {
          console.error("Error making the API request:", error);
          console.log(context.bookName);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.bookName]);

  return (
    <div className="all_books_api">
      {bookData && context.bookName ? (
        <>
          <div className="api_books  ">
            <div className="exite btn" onClick={() => handleExite()}>
              X
            </div>
            {bookData.map((book) => (
              <div key={book.id} className="item">
                <img
                  src={
                    book.volumeInfo.imageLinks
                      ? book.volumeInfo.imageLinks.thumbnail
                      : ""
                  }
                  alt={book.volumeInfo.title}
                />
                <div className="info">
                  <h2>{book.volumeInfo.title}</h2>
                  {book.saleInfo && book.saleInfo.listPrice ? (
                    <p>
                      Price: ${(book.saleInfo.listPrice.amount / 40).toFixed(2)}
                    </p>
                  ) : (
                    <p>Price: $32.4 </p>
                  )}
                </div>
                <div
                  className="btn"
                  onClick={() =>
                    context.stateDispatch({
                      type: actions.ADD_FROM_API,
                      payload: book,
                    })
                  }
                >
                  Add To Cart
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default BookApi;
