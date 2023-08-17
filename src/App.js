import React from 'react';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  const handleSearch = (query) => {
    console.log("Search query:", query);
    // You can perform any search-related actions here
  };
  return (
    <div className="container">
      <Navbar />
      <SearchBar onSearch={handleSearch}/>

      <Footer />
    </div>
  );
}

export default App;
