import { SET_LIST_DISPLAY } from "../action/list.action";

const initialeState = { showlist: false };

export default function listReducer(state = initialeState, action) {
  switch (action.type) {
    case SET_LIST_DISPLAY:
      return { showList: action.payload };
    default:
      return state;
  }
}
