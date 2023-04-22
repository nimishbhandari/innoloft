import axios from "axios";

export const GET_PRODUCT = "GET_PRODUCT";
export const UPDATE_PRODUCT = "GET_PRODUCT";

export const get_product = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`https://api-test.innoloft.com/product/${id}/`);
    return dispatch({ type: GET_PRODUCT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const update_product = (id) => async (dispatch) => {
  try {
    let res = await axios.put(`https://api-test.innoloft.com/product/${id}/`);
    return dispatch({ type: UPDATE_PRODUCT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
