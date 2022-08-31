import Cart from "./components/Cart";
import Products from "./components/Products";
import axios from "axios";
import { useEffect, useReducer } from "react";
import { cartReducer } from "./reducers/cartReducer";

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
    isLoading: false,
  });

  const fetchProductLists = async () => {
    dispatch({
      type: "FETCHING_PRODUCTS",
      payload: true,
    });

    const { data } = await axios.get("https://dummyjson.com/products");

    dispatch({
      type: "FETCH_PRODUCTS",
      payload: data?.products,
    });

    dispatch({
      type: "FETCHING_PRODUCTS",
      payload: false,
    });
  };

  useEffect(() => {
    fetchProductLists();
  }, []);

  console.log(state);

  return (
    <div style={{ display: "flex" }}>
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
