import { Fragment, useState, MouseEvent } from "react";

// to make this ListGroup component reusable, we can pass through parameters, aka props (properties)
// let's pass through heading : string, items : [], with an interface

interface Props {
  items: string[];
  heading: string;
  // function for when an item is selected
  onSelectItem: (item: string) => void; // void function, doesn't return anything, just does stuff; now to updaye App.tsx
}

// function ListGroup(props: Props) { // OR do what's below
function ListGroup({ items, heading, onSelectItem }: Props) {
  //let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //let selectedIndex = 0; // -1 = unselected; selected is 0 to items.length-1
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // this is independent to each ListGroup in App.tsx, in other words each list highlights separate from each other

  // no for loops in JSX, so you can use array mapping from JavaScript;
  // and so the items.map line turns each item in items into an li element

  // using variables to print messages
  //const message = items.length === 0 ? <p>No item found</p> : null;

  // can also do the above like this
  /*const getMessage = (message: string) => {
    return items.length === 0 ? <p>{message}</p> : null;
  };*/

  // we can do functions, eg. for onClick, here and then put them into onClick
  // (event) when in onClick shows MouseEvent but doesn't know what to do here, so import MouseEvent and specify that here
  const handleClick = (event: MouseEvent) => console.log(event);

  // dynamically highlighting selected button with function
  const showSelected = (index: number) =>
    selectedIndex === index ? "list-group-item active" : "list-group-item";

  // rather than using <div>, using <Fragment> (or <>, which is shorthand for <Fragment>)
  return (
    <>
      <h1>{heading}</h1>
      {/*getMessage("No items found")*/}
      {
        items.length === 0 && (
          <p>No items found</p>
        ) /*how this works: if thing before && is true, thing after is returned; if false, false is returned*/
      }
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              // this doesn't work by default bc selectedIndex is "hidden" in this return,
              // so use useState to allow selectedIndex to be "visible"

              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
