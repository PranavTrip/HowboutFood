import React from "react";

const Buttons = ({ filterItem, values }) => {
  return (
    <>
      <div className="container my-3 d-flex justify-content-center">
        {values.map((currentElement) => {
          return (
            <>
              <button
                type="button"
                class="btn btn-warning m-3"
                onClick={() => filterItem(currentElement)}
              >
                {currentElement}
              </button>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Buttons;
