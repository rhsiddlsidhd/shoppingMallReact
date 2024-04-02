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
      dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
    } catch (err) {
      console.error(err.message);
    }
  };
}

function getProductDetail(params) {
  return async (dispatch, getState) => {
    try {
      const url = new URL(
        `https://my-json-server.typicode.com/rhsiddlsidhd/shoppingMallReact/products/${params.id}`
      );
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`${res.status} =====> ${res.statusText}`);
      }

      const data = await res.json();

      dispatch({ type: "GET_PRODUCT_DETAIL", payload: { data } });
    } catch (err) {
      console.error(err);
    }
  };
}

export const productAction = { getProducts, getProductDetail };
