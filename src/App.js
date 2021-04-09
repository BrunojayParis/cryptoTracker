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
        document.alert(error);
      })
  }, []);

  //functions
  const searchHandler = (e) => {
    setState(e.target.value);
  }

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(state.toLowerCase()))


  return (
    <div>
      <h1 class="text-4xl ">Crypto Tracker</h1>
      <form class="py-4">
        <input class="border-2 border-black-200" type="text" onChange={searchHandler} placeholder="search" />
        
      </form>
      <div className="flex flex-wrap">

        {filteredCoins.map(coins =>
          <Coins
            key={coins.id}
            name={coins.name}
            image={coins.image}
            symbol={coins.symbol}
            price={coins.current_price}
            volume={coins.total_volume}
            priceChange={coins.price_change_percentage_24h} />)}
      </div>

    </div>
  );
}

export default App;
