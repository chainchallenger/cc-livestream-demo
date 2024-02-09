import { configureStore } from "@reduxjs/toolkit";

import siteReducers from "./site";
import userReducers from "./user";
import categoryReducers from "./category";
import gameReducers from "./game";

export default configureStore({
  reducer: {
    site: siteReducers,
    user: userReducers,
    category: categoryReducers,
    game: gameReducers,
  },
});
