import React from "react";

const Products = ({ state, dispatch }) => {
  const { products, cart, isLoading } = state ?? {};

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "80%",
      }}
    >
      {!isLoading
        ? products.map((product) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 10,
                border: "1px solid gray",
                width: "30%",
                marginTop: 10,
                gap: 10,
              }}
            >
              <img
                src={product.thumbnail}
                style={{ height: 200, objectFit: "cover" }}
                alt={product.title}
              />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{product.title}</span>
                <b>{product.price}</b>
              </div>
              {cart.some((p) => p.id === product.id) ? (
                <button
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: product.id,
                    })
                  }
                >
                  Remove from cart
                </button>
              ) : (
                <button
                  onClick={() =>
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: product,
                    })
                  }
                >
                  Add to cart
                </button>
              )}
            </div>
          ))
        : "The product list are rendering..."}
    </div>
  );
};

export default Products;
