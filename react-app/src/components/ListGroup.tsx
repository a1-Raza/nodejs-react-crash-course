import { Fragment, useState, MouseEvent } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; // void function, doesn't return anything, just does stuff; now to updaye App.tsx
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // rather than using <div>, using <Fragment> (or <>, which is shorthand for <Fragment>)
  return (
    <>
      <h1>{heading}</h1>
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
