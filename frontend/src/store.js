import { applyMiddleware, createStore, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailsReducer,
  productReducer,
} from "./redux/reducers/productReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  productList: productReducer,
  productDetails: productDetailsReducer,
});

const initialState = {};

const middleware = [thunk];

// const middlewares = [thunk];
// const middlewareEnhancer = applyMiddleware(...middlewares);

// const store = createStore(reducer,{},composeWithDevTools(middlewareEnhancer));

// export default store

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(
    reducer,
    preloadedState,
    composeWithDevTools(middlewareEnhancer)
  );

  return store;
}
