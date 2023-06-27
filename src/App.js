import React/*{useRef,useState}*/ from "react";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import "./App.css";
import ResumeState from "./context/ResumeState";
import Resume from "./components/Resume/Resume";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <ResumeState>
      <div className="App">
        <Navbar />
        <Header link={"https://cdn.dribbble.com/userupload/3715014/file/original-2f279f7f831605ce59aa32220357c4a7.jpg?compress=1&resize=400x300&vertical=center"} />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="builder" element={<Body />} />
          <Route path="preview" element={<Resume />} />

        </Routes>
      </div>
    </ResumeState>
  );
}

export default App;
