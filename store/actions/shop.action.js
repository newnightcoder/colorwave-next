import listing from "../../services/listing";
import { actionTypes } from "../types/types";

export const getShopData = () => async (dispatch) => {
  const data = await listing();
  if (data !== undefined) {
    return dispatch({
      type: actionTypes.GET_SHOP,
      payload: data,
    });
  }
};

export const toggleSearchModal = () => (dispatch) => {
  dispatch({ type: actionTypes.TOGGLE_SEARCH_MODAL });
};
