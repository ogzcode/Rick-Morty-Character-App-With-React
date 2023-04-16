import './App.css';
import Header from './components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { getData, getDataWithURL } from './redux/data/dataSlice';
import { useEffect } from 'react';
import CharacterList from "./components/CharacterList";

import NavBar from './components/NavBar';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const url = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (url.pathname === "/all") {
      dispatch(getDataWithURL(""));
    }
    else if (url.pathname === "/female") {
      dispatch(getDataWithURL("/?gender=female"));
    }
    else if (url.pathname === "/male") {
      dispatch(getDataWithURL("/?gender=male"));
    }
    else if (url.pathname === "/unknown") {
      dispatch(getDataWithURL("/?status=unknown"));
    }
    else if (url.pathname === "/alive") {
      dispatch(getDataWithURL("/?status=alive"));
    }
    else if (url.pathname === "/dead") {
      dispatch(getDataWithURL("/?status=dead"));
    }
  }, [url, dispatch]);

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
