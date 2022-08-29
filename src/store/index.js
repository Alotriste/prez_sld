import { configureStore } from "@reduxjs/toolkit";
import presentationReduser from "./presentationSlice";

export default configureStore({
  reducer: {
    presentation: presentationReduser,
  },
});
