import { createSlice } from "@reduxjs/toolkit";
import Slide1 from "../components/slid/slids/Slide1";
import Slide2 from "../components/slid/slids/Slide2";
import Slide3 from "../components/slid/slids/Slide3";

const presentationSlice = createSlice({
  name: "presentation",
  initialState: {
    wrapperPageSlids: "wrapper__page-slids_next",
    wrapperPageSlidsDel: "wrapper__page-slids--del_next",

    couterPage: 0,
    togglePage: true,
    toggleClassName: true,
    presentation: [
      { id: 1, component: () => <Slide1 /> },
      { id: 2, component: () => <Slide2 /> },
      { id: 3, component: () => <Slide3 /> },
    ],
  },
  reducers: {
    CounterNext(state, action) {
      state.couterPage += 1;
      if (state.couterPage > state.presentation.length-1) state.couterPage = 0;
      state.wrapperPageSlids = "wrapper__page-slids_next";
      state.wrapperPageSlidsDel = "wrapper__page-slids--del_next";
      console.log(state.couterPage); 
    },
    CounterBack(state, action) {
      state.couterPage -= 1;
      if (state.couterPage < 0) state.couterPage = state.presentation.length-1;
      state.wrapperPageSlids = "wrapper__page-slids_back";
      state.wrapperPageSlidsDel = "wrapper__page-slids--del_back";
      console.log(state.couterPage); 
    },
    toggleMainPageClass(state, action) {
      state.toggleClassName = !state.toggleClassName;
    },
    toggleMainPage(state, action) {
      state.togglePage = !state.togglePage;
    },
  },
});

export const { toggleMainPage, CounterNext, CounterBack, toggleMainPageClass } =
  presentationSlice.actions;
export default presentationSlice.reducer;
