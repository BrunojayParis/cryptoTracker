import React from 'react';

const Coins = ({name, image, symbol, price, volume, priceChange}) =>{




    return(
        <div class="grid grid-cols-2 gap-2 py-2">       
            <div class="flex" >
                <img class="h-8" src={image} alt=""/>
                <h1 class="px-2">{name}</h1>
            </div>
            <div class="grid grid-cols-4 gap-4">
                <p className="coinSymbol">{symbol}</p>
                <p className="coinPrice">$ {price}</p>
                <p>{volume}</p>
                <p>{priceChange.toFixed(2)}%</p>
            </div>
        </div>
        
    )
}

export default Coins;
