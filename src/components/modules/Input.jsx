import { useEffect, useState } from "react";
import { searchHandler } from "../../Services/CryptoApi";
import { RotatingLines } from "react-loader-spinner";
import styles from"./Input.module.css"
function Input({ country, setCountry }) {
  const [search, setSerach] = useState("");
  const [serachCoins, setSearchCoins] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const searchFetch = async () => {
      setSearchCoins([]);
      if (!search){setIsloading(false); return} ;
      try {
        const res = await fetch(searchHandler(search), {
          signal: controller.signal,
        });
        const json = await res.json();
        if (json.coins) {
          setIsloading(false);
          setSearchCoins(json.coins);
        } else {
          alert(json.status.error_message);
        }
        console.log(json.coins);
      } catch (error) {
        if (error.name !== "AbortError") {
          alert(error.message);
        }
      }
    };
    setIsloading(true);
    searchFetch();

    return () => controller.abort();
  }, [search]);
  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSerach(e.target.value)}
      />
      <select className={styles.select}
        value={country}
        onChange={(event) => setCountry(event.target.value)}
      >
        <option value="usd">USD</option>
        <option value="jpy">JPY</option>
        <option value="eur">EUR</option>
      </select>
      {(!!serachCoins.length || isLoading) && <div className={styles.searchResult}>
        {isLoading && (
          <RotatingLines
            width="50px"
            height="50px"
            strokeWidth="2"
            strokeColor="#3874ff"
          />
        )}
        <ul>
          {serachCoins.map((coin) => (
            <li key={coin.id}>
              <img src={coin.thumb} alt="" />
              {coin.symbol}
            </li>
          ))}
        </ul>
      </div>
    }
    </div>  
  );
}

export default Input;
