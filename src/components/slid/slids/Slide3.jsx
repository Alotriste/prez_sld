import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMainPage, toggleMainPageClass } from "../../../store/presentationSlice";

function Slide3() {
  const changeClassName = useSelector(
    (state) => state.presentation.toggleClassName
  );

  const classPageSlid = useSelector((state)=>state.presentation.wrapperPageSlids);
  const classPageSlidDel = useSelector((state)=>state.presentation.wrapperPageSlidsDel);


  const dispatch = useDispatch();

  return (
    <div
      className={
        changeClassName ? classPageSlid : classPageSlidDel
      }
    >
      <span>3</span>
      <button
        onClick={() => {
          setTimeout(() => {
            dispatch(toggleMainPageClass());
            dispatch(toggleMainPage());
          }, 800);
          dispatch(toggleMainPageClass());
        }}
      >
        change
      </button>
    </div>
  );
}

export default Slide3;
