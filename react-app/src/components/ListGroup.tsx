import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //items = [];

  // no for loops in JSX, so you can use array mapping from JavaScript;
  // and so the items.map line turns each item in items into an li element

  // using variables to print messages
  //const message = items.length === 0 ? <p>No item found</p> : null;

  // can also do the above like this
  /*const getMessage = (message: string) => {
    return items.length === 0 ? <p>{message}</p> : null;
  };*/

  // rather than using <div>, using <Fragment> (or <>, which is shorthand for <Fragment>)
  return (
    <>
      <h1>List</h1>
      {/*getMessage("No items found")*/}
      {
        items.length === 0 && (
          <p>No items found</p>
        ) /*how this works: if thing before && is true, thing after is returned; if false, false is returned*/
      }
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(event) => console.log(event)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
