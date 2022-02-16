import { Map } from "immutable"

import * as actionType from "./constant"

const defaultState = Map({
  banners: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_TOP_BANNER:
      // console.log(state, action)
      return state.set("banners", action.banner);
    // return { ...state, banners: action.banner };
    default:
      return state;
  }
}

export default reducer;