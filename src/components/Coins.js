import React from 'react';

const Coins = ({name, image, symbol, price}) =>{




    return(
        <div class="grid grid-cols-2 gap-2 py-2">       
            <div class="flex" >
                <img class="h-8" src={image} alt=""/>
                <h1 class="px-2">{name}</h1>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <p className="coinSymbol">{symbol}</p>
                <p className="coinPrice">$ {price}</p>
            </div>
        </div>
        
    )
}

export default Coins;
