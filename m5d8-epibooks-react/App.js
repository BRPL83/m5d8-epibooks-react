import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MyNavBar from './Components/MyNavBar.jsx';
import Welcome from './Components/Welcome.jsx';
import AllTheBooks from './Components/AllTheBooks.jsx';
import BookDetails from './Components/BookDetails.jsx';
import NotFound from './Components/NotFound.jsx';
import Footer from './Components/Footer.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const appStyle = {
    backgroundColor: '#f2f2f2',
    minHeight: '100vh',
  };

  return (
    <BrowserRouter>
      <div style={appStyle}>
      <MyNavBar searchQuery={searchQuery} setSearchQuery={handleSearch} />
      <Container>
        <Welcome />
        <Routes>
          <Route path="/" element={<AllTheBooks searchQuery={searchQuery} />} />
          <Route path="/details/:asin" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App




import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'