import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Data from "./data";
import Items from "./Items";
import Buttons from "./Buttons";

const App = () => {
  const allValues = [
    "All",
    ...new Set(
      Data.map((currentElement) => {
        return currentElement.category;
      })
    ),
  ];
  const [items, setItems] = useState(Data);
  const [values, setValues] = useState(allValues);

  // console.log(allValues);

  const filterItem = (categoryItem) => {
    if (categoryItem === "All") {
      setItems(Data);
      return;
    }
    const updatedItem = Data.filter((currentElement) => {
      return currentElement.category === categoryItem;
    });
    setItems(updatedItem);
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <h1 className="text-center special-font">
          Order Your Favourite Dish !
        </h1>
      </div>

      <hr />
      <Buttons filterItem={filterItem} values={values} />
      <Items items={items} />
    </>
  );
};

export default App;
