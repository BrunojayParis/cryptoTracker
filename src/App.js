import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";



//https://api.coingecko.com/api/v3/coins/markets?vs_currency=ars&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=ars&order=market_cap_desc&per_page=100&page=1&sparkline=false")
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  },[]);

  return (
    <div className="App">
      <h1></h1>
     
    </div>
  );
}

export default App;
