import React from "react";
import './mainPage.css';
import { useDispatch } from "react-redux";
import { toggleMainPage } from "../../store/presentationSlice";

function MainPage() {
const dispatch = useDispatch()


  return <>
      <div className="wrapper__main-page__title" onClick={()=> dispatch(toggleMainPage())}><span>Начать презентацию</span></div>
  </>;
  
}

export default MainPage;
