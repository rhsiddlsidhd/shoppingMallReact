function getProducts(searchTerm) {
  return async (dispatch, getState) => {
    try {
      const url = new URL(
        `https://my-json-server.typicode.com/rhsiddlsidhd/shoppingMallReact/products?q=${
          searchTerm ? searchTerm : ""
        }`
      );
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`${res.status} =====> ${res.statusText}`);
      }
      const data = await res.json();
      console.log("미들웨어", data);
      dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
    } catch (err) {
      console.error(err.message);
    }
  };
}

export const productAction = { getProducts };
