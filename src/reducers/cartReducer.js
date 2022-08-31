export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCHING_PRODUCTS":
      return { ...state, isLoading: payload };
    case "FETCH_PRODUCTS":
      return { ...state, products: payload };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((c) => c.id !== payload) };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === payload.id ? (c.qty = payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};
