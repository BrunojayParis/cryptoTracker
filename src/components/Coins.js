import React from 'react';

const Coins = ({ name, image, symbol, price, volume, priceChange }) => {




    return (
        <div class="py-3 px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white flex flex-col justify-center items-center  hover:shadow-xl transition-shadow duration-300 ease-in-out text-2xl">
                <div class="px-4 py-3">
                    <div className="flex flex-col items-center">
                    <img class="h-20" src={image} alt="" />
                    <h1 class="px-2">{name}</h1>
                    </div>
                    <p className="">{symbol}</p>
                    <p className="">$ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                    <p>$ {volume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                    <p>{priceChange.toFixed(2)}%</p>
                </div>
            </div>
        </div>

    )
}

export default Coins;
