import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./GPTSlice";
import configReducer from "./appConfigSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    GPT: gptReducer,
    appConfig: configReducer,
  },
});

export default appStore;
