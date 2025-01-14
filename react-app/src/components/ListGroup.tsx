import { Fragment } from "react";

function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // no for loops in JSX, so you can use array mapping from JavaScript;
  // and so the items.map line turns each item in items into an li element

  // rather than using <div>, using <Fragment> (or <>, which is shorthand for <Fragment>)
  return (
    <>
      <h1>List</h1>
      <p>continue at section "Conditional Rendering"</p>
      <p>https://www.youtube.com/watch?v=SqcY0GlETPk</p>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
