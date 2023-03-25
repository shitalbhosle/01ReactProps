import React from "react";
import ReactDOM from "react-dom/client";
import data from "./data";
import Book from "./book";
import "./index.css";

function BookList() {
  return (
    <>
      <h1>Amazon Book Sellers</h1>
      <section className="booklist">
        {data.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
