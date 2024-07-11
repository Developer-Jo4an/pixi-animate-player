import {configureStore} from '@reduxjs/toolkit'
import rootReducer from "./reducer/rootReducer";
import logger from "./middleware/logger";


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    let middleware = getDefaultMiddleware();
    if (process.env.NODE_ENV === "development")
      middleware = middleware.concat(logger)
    return middleware;
  },
});

export default store;
