import React from 'react';

const Coins = ({name, image, symbol, price}) =>{




    return(
        <div className= "coinsConteiner">
            <div className="coinsRow">
                <div className="coins">
                    <img src={image} alt=""/>
                    <h1>{name}</h1>
                    <p className="coinSymbol">{symbol}</p>
                    <p className="coinPrice">{price}</p>

                </div>
            </div>
        </div>
        
    )
}

export default Coins;
