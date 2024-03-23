import { useState } from 'react';
import './App.css';
import Board from "./Board";
import ManageMenu from "./ManageMenu";
import { useSelector } from 'react-redux';
import About from "./About";
import { Route, Routes, Link } from 'react-router-dom';
import Glekys from './Gleki';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div className="Icon">Анти-КРС</div>
        <div className="GeneralMenu">
          <Link to="/">
            <div className="General">Главная</div>
          </Link>
          <Link to="/GameOfLife">
            <div className="Works">Проекты</div>
          </Link>
          <Link to="/Gleki">
            <div className="Gleks">Список главных глэков России</div>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<About/>}></Route>
        <Route path="/GameOfLife" element={<div className="SarkisyanRomanGameOfLife"><Board/><ManageMenu/></div>}></Route>
        <Route path="/Gleki" element={<Glekys/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
