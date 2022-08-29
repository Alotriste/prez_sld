import React from "react";
import "./pageSlids.css";
import { useDispatch, useSelector } from "react-redux";
import { CounterBack, CounterNext, toggleMainPageClass } from "../../store/presentationSlice";

function PageSlids() {
  const counter = useSelector((state) => state.presentation.couterPage);
  const slidsPage = useSelector((state) => state.presentation.presentation);
  const dispatch = useDispatch();
  console.log(counter)
  
  
  return (
    <>
      {slidsPage[counter].component()}
      <div className="btn" onClick={() =>{ setTimeout(()=>{dispatch(toggleMainPageClass()); dispatch(CounterBack())},800); dispatch(toggleMainPageClass())}}>back</div>
      <div className="btn" onClick={() =>{ setTimeout(()=>{dispatch(toggleMainPageClass()); dispatch(CounterNext())},800); dispatch(toggleMainPageClass())}}>next</div>
    </>
  );
}

export default PageSlids;
