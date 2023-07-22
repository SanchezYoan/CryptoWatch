export const SET_LIST_DISPLAY = "SET_LIST_DISPLAYE";

export const setListDisplay = (bool) => {
  return (dispatch) => {
    return dispatch({ type: SET_LIST_DISPLAY, payload: bool });
  };
};
