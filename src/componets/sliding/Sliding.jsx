import { Triangle } from "lucide-react";
import React from "react";
import { GiTriangleTarget } from "react-icons/gi";
const cryptocurrencies = [
  {
    ticker: "BTC",
    price: 45000.0,
    priceChange: 500.0,
    percentChange: 1.12,
    product: "Bitcoin",
    image: "https://example.com/images/bitcoin.jpg",
  },
  {
    ticker: "ETH",
    price: 3200.5,
    priceChange: 75.0,
    percentChange: 2.39,
    product: "Ethereum",
    image: "https://example.com/images/ethereum.jpg",
  },
  {
    ticker: "BNB",
    price: 350.75,
    priceChange: 5.5,
    percentChange: 1.59,
    product: "Binance Coin",
    image: "https://example.com/images/binance_coin.jpg",
  },
  {
    ticker: "SOL",
    price: 150.3,
    priceChange: -2.1,
    percentChange: -1.38,
    product: "Solana",
    image: "https://example.com/images/solana.jpg",
  },
  {
    ticker: "XRP",
    price: 1.2,
    priceChange: 0.05,
    percentChange: 4.35,
    product: "Ripple",
    image: "https://example.com/images/ripple.jpg",
  },
  {
    ticker: "ADA",
    price: 2.0,
    priceChange: -0.05,
    percentChange: -2.44,
    product: "Cardano",
    image: "https://example.com/images/cardano.jpg",
  },
  {
    ticker: "DOT",
    price: 30.0,
    priceChange: 1.0,
    percentChange: 3.45,
    product: "Polkadot",
    image: "https://example.com/images/polkadot.jpg",
  },
  {
    ticker: "DOGE",
    price: 0.25,
    priceChange: 0.01,
    percentChange: 4.17,
    product: "Dogecoin",
    image: "https://example.com/images/dogecoin.jpg",
  },
  {
    ticker: "LTC",
    price: 180.0,
    priceChange: 2.0,
    percentChange: 1.12,
    product: "Litecoin",
    image: "https://example.com/images/litecoin.jpg",
  },
  {
    ticker: "LINK",
    price: 25.0,
    priceChange: 0.5,
    percentChange: 2.04,
    product: "Chainlink",
    image: "https://example.com/images/chainlink.jpg",
  },
  {
    ticker: "MATIC",
    price: 1.4,
    priceChange: 0.02,
    percentChange: 1.45,
    product: "Polygon",
    image: "https://example.com/images/polygon.jpg",
  },
  {
    ticker: "UNI",
    price: 22.0,
    priceChange: 1.0,
    percentChange: 4.76,
    product: "Uniswap",
    image: "https://example.com/images/uniswap.jpg",
  },
  {
    ticker: "THETA",
    price: 6.0,
    priceChange: -0.2,
    percentChange: -3.23,
    product: "Theta Network",
    image: "https://example.com/images/theta.jpg",
  },
  {
    ticker: "AVAX",
    price: 65.0,
    priceChange: 3.0,
    percentChange: 4.84,
    product: "Avalanche",
    image: "https://example.com/images/avalanche.jpg",
  },
  {
    ticker: "FIL",
    price: 85.0,
    priceChange: 1.5,
    percentChange: 1.8,
    product: "Filecoin",
    image: "https://example.com/images/filecoin.jpg",
  },
  {
    ticker: "ALGO",
    price: 1.0,
    priceChange: -0.02,
    percentChange: -1.96,
    product: "Algorand",
    image: "https://example.com/images/algorand.jpg",
  },
  {
    ticker: "XLM",
    price: 0.4,
    priceChange: 0.02,
    percentChange: 5.26,
    product: "Stellar",
    image: "https://example.com/images/stellar.jpg",
  },
  {
    ticker: "EOS",
    price: 5.0,
    priceChange: 0.1,
    percentChange: 2.04,
    product: "EOS",
    image: "https://example.com/images/eos.jpg",
  },
  {
    ticker: "ZRX",
    price: 1.0,
    priceChange: 0.05,
    percentChange: 5.26,
    product: "0x",
    image: "https://example.com/images/0x.jpg",
  },
];

const sliding = () => {
  return (
    <div className="overflow-hidden  bg-black text-white  flex px-0 my-5">
      <ul className="flex gap-10  animate-infinite-scroll px-4 text-[20px]">
        {[...cryptocurrencies, ...cryptocurrencies].map((stock, index) => {
          const priceIncrease = stock.priceChange > 0;
          return (
            <li key={index} className="flex gap-2 items-center py-5">
              <p>{stock.ticker}</p>
              <p className={priceIncrease ? "text-green-500" : "text-red-500"}>
                ${stock.price}
              </p>

              <p className={priceIncrease ? "text-green-500" : "text-red-500"}>
                {stock.priceChange}
              </p>

              <p>{stock.percentChange}</p>
              <Triangle
                fill="white"
                className={`size-3 ${!priceIncrease && "rotate-180"}`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default sliding;
