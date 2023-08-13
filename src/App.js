import React from 'react';
import Home from "./components/Home";
import Media from './components/Media';
import Abouts from './components/Abouts';
import Contacts from './components/Contacts';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media" element={<Media />} />
        <Route path="/abouts" element={<Abouts />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
