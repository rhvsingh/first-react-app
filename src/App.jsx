import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './style.css'

import Index from './test/Index';
import NotFoundPage from './test/components/NotFoundPage'

//Ecommerce
import Ecommerce from './ecommerce/Ecommerce'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<Index />} />
          <Route path="/ecommerce/*" element={<Ecommerce />} />
          {/* <Route path="/nav" element={} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
