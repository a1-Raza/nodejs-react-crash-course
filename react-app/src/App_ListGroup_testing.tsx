import ListGroup from "./components/ListGroup";

function App() {
  //return <div><Message></Message></div>;
  // below is same as above, called self-closing syntax

  // when adding props/properties, make sure you include them in the ListGroup div

  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
