import { useState } from "react";
import { convertData } from "../../helper/convertData";
import styles from "./Modals.module.css";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
function Modals({ setModal, modal }) {
  const [type, setType] = useState("prices");
  console.log(modal);
  const eventHandler=(event)=>{
    const tagName=event.target.tagName;
    if(tagName==="BUTTON"){
        const name=event.target.innerText.toLowerCase().replace(" " , "_");
        setType(name)
    }
  }
  return (
    <>
      <div className={styles.parent}>
        <span className={styles.back} onClick={() => setModal(null)}>
          X
        </span>
        <div className={styles.chart}>
          <div className={styles.imgParent}>
            <img src={modal.coin.image} alt="" />
            <p>{modal.coin.symbol.toUpperCase()}</p>
          </div>
          <div className={styles.chartChild}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={400}
                height={400}
                data={convertData(modal, type)}
              >
                <Line
                  dataKey={type}
                  type="monotone"
                  strokeWidth="2px"
                  stroke="#3847ff"
                />
                <CartesianGrid stroke="#404042" />
                <YAxis dataKey={type} domain={["auto", "auto"]} />
                <Tooltip />
                <Legend />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div onClick={eventHandler}>
            <button>Prices</button>
            <button>Market Caps</button>
            <button>Total Volumes</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modals;
