import TableRow from "./tableRow";
import { RotatingLines } from "react-loader-spinner";
import styles from "./TableCoins.module.css"
function TableCoins({ coins, isLoading,  setModal }) {
  console.log(coins);
  return (
    <>
    
      <div className={styles.container}>
        {isLoading ? (
          <RotatingLines />
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Coin</th>
                <th>Name</th>
                <th>Price</th>
                <th>24h</th>
                <th>Total Volume</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin) => (
                <>
                  <TableRow coin={coin} key={coin.id} setModal={setModal} />
                </>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default TableCoins;
