import { combineReducers } from "redux-immutable"

// import { combineReducers } from "redux";
import { reducer as recommendReducer } from "@/pages/discover/children/recommend/store"



const reducer = combineReducers({
  recommend: recommendReducer
})
export default reducer