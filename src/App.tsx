// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/nav';
import Home from './pages/home';
import Products from './pages/product.jsx';
import About from './pages/about';
import Shop from './pages/shop';
import Blog from './pages/blog';


const App: React.FC = () => {
  return (
  <Router>
      <div>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About/>} />
         </Routes>
      </div>
  </Router>
  );
};

export default App;
