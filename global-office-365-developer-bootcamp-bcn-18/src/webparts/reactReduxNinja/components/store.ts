import { IStateReducer } from "../reducer";
import { applyMiddleware, createStore as reduxCreateStore, Store } from "redux";
import reduxThunk from "redux-thunk";
import { combineReducers } from "redux";


import { loadPlayerReducer } from '../reducer/loadPlayerReducer';
import  { loadPlayerIdReducer}  from '../reducer/loadPlayerIdReducer';

export function createStore(initialState?: IStateReducer): Store<IStateReducer> {
const middlewares = [
  reduxThunk
];

return reduxCreateStore(
  combineReducers<IStateReducer>({
    playerCollection: loadPlayerReducer,
    player:loadPlayerIdReducer
  }),  
  applyMiddleware(...middlewares)
);

}