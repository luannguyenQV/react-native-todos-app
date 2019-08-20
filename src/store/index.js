import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";

import todos from "./todos";
import rootSaga from "../sagas";
import { ALL } from "../configs/filterType";

const REDUX_PERSIST_VERSION = 1;

const persistConfig = {
  blacklist: ["session"],
  key: "root",
  storage,
  version: REDUX_PERSIST_VERSION,
};

const createMiddleWares = (sagaMiddleware) => {
  const middleWares = [];
  if (sagaMiddleware) {
    middleWares.push(sagaMiddleware);
  }
  return applyMiddleware.apply({}, middleWares);
};

// Auto merge reducer level 2, so using persistCombineReducers
const rootReducer = () =>
  persistCombineReducers(persistConfig, {
    todos,
  });

const initialState = {
  todos: {
    todos: [
      {
        _id: "1566235508136",
        title: "Complete Todo Application",
        updatedAt: 1566235508136,
        isComplete: false, // NEW | DONE
      },
      {
        _id: "1566235508137",
        title: "Update UI for Todos",
        updatedAt: 1566235508136,
        isComplete: false, // NEW | DONE
      },
      {
        _id: "1566235508138",
        title: "Add unit test for components",
        updatedAt: 1566235508136,
        isComplete: false, // NEW | DONE
      },
      {
        _id: "1566235508139",
        title: "Add unit test for logics",
        updatedAt: 1566235508136,
        isComplete: false, // NEW | DONE
      },
    ],
    filter: ALL,
    searchTerm: "",
  },
};

const composeEnhancers = __DEV__ // eslint-disable-line
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose;

const initialStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer(),
    initialState,
    composeEnhancers(createMiddleWares(sagaMiddleware))
  );

  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(rootReducer());
    });
  }
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);

  return { persistor, store };
};

const { persistor, store } = initialStore();

export { persistor, store };
