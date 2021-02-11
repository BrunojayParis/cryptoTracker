import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
// importing components
import Coins from "./components/Coins.js";




// criptocurrency API : https://api.coingecko.com/api/v3/coins/markets?vs_currency=ars&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {

  const [coins, setCoins] = useState([])
  const [state, setState] = useState('')
  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=ars&order=market_cap_desc&per_page=100&page=1&sparkline=false")
  .then(function (response) {
    // handle success
    setCoins(response.data);
    console.log(setCoins)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  },[]);

  //functions
  const searchHandler =(e) =>{
    setState(e.target.value);
  }

  const filteredCoins = coins.filter(coin=> coin.name.toLowerCase().includes(state.toLowerCase()))
  
  console.log(searchHandler)



  return (
    <div className="coinsApp">
      <h1>This is the new crypto tracker</h1>
      <form>
        <input type="text" onChange={searchHandler} />
        <button>Get Coins</button>
      </form>

      {filteredCoins.map(coins => <Coins key={coins.id} name= {coins.name} image={coins.image} symbol= {coins.symbol} price ={coins.current_price} />)}

     
    </div>
  );  
}

export default App;
