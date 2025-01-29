import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import './App.css'

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="article" element={<Article />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
