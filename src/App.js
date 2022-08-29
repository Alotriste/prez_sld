import React from 'react'
import './App.css';
import MainPage from './components/mainPage/MainPage';
import PageSlids from './components/slid/PageSlids';
import { useSelector } from 'react-redux';

function App() {
 const changePage = useSelector(state => state.presentation.togglePage)
  return (
    <div className='wrapper'>
    {changePage?<MainPage/>:<PageSlids/>}
    </div>
  );
}

export default App;
