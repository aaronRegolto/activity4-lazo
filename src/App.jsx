import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import PriceChecker from './components/PriceChecker';
import ApiPractice from './components/ApiPractice';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="price-checker" element={<PriceChecker />} />
          <Route path="api-practice" element={<ApiPractice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
