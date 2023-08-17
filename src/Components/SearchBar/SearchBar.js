import React, { useState } from "react";
import axios from "axios";
import searchIcon from "../../logo/Search.png";
import circledplay from "../../logo/Circled Play.png";



const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [responseData, setResponseData] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`
      );

      onSearch(response.data);

      // Update the responseData and log the data for debugging
      setResponseData(response.data);
      console.log("Response Data:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (

    <div className="maincontainer">
      <form onSubmit={handleSearchSubmit} className="search-container mt-1">
        <div className="btn-container" style={{border: '1px solid grey', borderRadius: '7px'}}>
        <img
              src={searchIcon}
              type="button"
              alt="Search Icon"
              className="search-icon"
              style={{
                position: 'absolute',
                left: '12%',
                top:'7.6%'
              }}
            />
        <input
            type="text"
            autoFocus
            className="form-control ms-5 "
            name="search"
            placeholder=""
            value={searchQuery}
            onChange={handleSearchChange}
            style={{
              paddingRight: '13%',
              border: 'none',
            }}
          />
        </div>
      </form>
      {/* <form onSubmit={handleSearchSubmit} className="search-container mt-1">
        <div className="input-group">
          <button className="btn btn-search" type="submit">
            <img
              src={searchIcon}
              alt="Search Icon"
              className="search-icon"
              style={{
                height: 'auto',
                borderLeft: '1px solid black',
                borderTop: '1px solid black',
                borderBottom: '1px solid black',
                borderColor: 'black'
              }}
            />

          </button>
          <input
            type="text"
            autoFocus
            className="form-control "
            name="search"
            placeholder=""
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </form> */}
      <div id="second" style={{ border: '1px solid black', marginTop: '30px', borderRadius: '20px', padding: '20px' }}>
        <button className="btn btn-play" type="play">
          <img src={circledplay} className="circledplay" />
        </button>
        <div className="phonetic">
          {responseData.length > 0 && (
            <div>
              <p>{responseData[0]?.phonetic || "N/A"}</p>
            </div>
          )}
        </div>

        {responseData.map((item, index) => (
          <div key={index}>
            {item.meanings[0].definitions.map((meaning, meaningIndex) => (
              <div key={meaningIndex}>
                <p> {meaningIndex + 1}: {meaning.definition || "N/A"}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
