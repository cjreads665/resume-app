import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Home from './Home';
import Form from './Resume/Form'
import { BrowserRouter,Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App font-[Poppins] p-4 min-h-screen">
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/create-resume' element={<Form/>} />
    </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
