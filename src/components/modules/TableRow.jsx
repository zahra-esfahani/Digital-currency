import { marketChart } from "../../Services/CryptoApi";
import chartdown from "../../assets/chart-down.svg";
import chartUp from "../../assets/chart-up.svg";
import styles from "./TableCoins.module.css"
function TableRow({ coin  , setModal}) {
  const ShowHandler= async()=>{
  try {
    const res= await fetch(marketChart(coin.id));
    const json=await res.json();
    setModal({...json , coin})
  } catch (error) {
    setModal(null)
  }
  }
  return (
    <tr>
      <td>
        <div className={styles.symbol} onClick={ShowHandler}>
          <img src={coin.image} alt="" />
          <span>{coin.symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{coin.name}</td>
      <td>${coin.current_price.toLocaleString()}</td>
      <td className={coin.price_change_24h > 0 ? styles.success:styles.error}>{coin.price_change_24h.toLocaleString()}%</td>
      <td>${coin.total_volume.toLocaleString()}</td>
      <td>
        <img src={coin.price_change_24h > 0 ? chartUp : chartdown} alt="" />
      </td>
    </tr>
  );
}

export default TableRow;
