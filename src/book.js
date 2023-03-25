import React from "react";

function Book(data) {
  const { name, age, image, number } = data;
  console.log(number);

  return (
    <article className="book">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h4>{age}</h4>
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  );
}
export default Book;
