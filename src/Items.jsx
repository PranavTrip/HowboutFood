import React from "react";
import Data from "./data";

const Items = ({items}) => {
  return (
    <>
      

      <div className="container ">
        {items.map((elem) => {
          const { id, image, name, category, price, description } = elem;
          return (
            <div class="card card-disp" style={{ width: "18rem" }} key={id}>
              <img src={image} class="card-img-top card-image-disp" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-center">{name}</h5>
                <p class="card-text text-center">{description}</p>
                <p className="text-center text-primary">{price}</p>
                <p className="text-danger">*Prices may vary</p>
                <a
                  href="#"
                  class="btn btn-success justify-content-center d-flex"
                >
                  Order Now
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Items;
