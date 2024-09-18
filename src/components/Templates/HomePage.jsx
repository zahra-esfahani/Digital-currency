import { useEffect, useState } from "react";
import TableCoins from "../modules/TableCoins";
import { getCoinList } from "../../Services/CryptoApi";
import Pagination from "../modules/Pagination";
import Input from "../modules/Input";
import Modals from "../modules/Modals";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [counter, setcounter] = useState(1);
  const [country, setCountry] = useState("USD");
  const [modal, setModal] = useState(null);
  useEffect(() => {
    setIsloading(true);
    fetch(getCoinList(counter, country))
      .then((res) => res.json())
      .then((data) => setCoins(data));
    setIsloading(false);
  }, [counter, country]);
  return (
    <>
      
      <Input country={country} setCountry={setCountry} />
      <TableCoins coins={coins} isLoading={isLoading} setModal={setModal}/>
      <Pagination counter={counter} setcounter={setcounter} />
      {!!modal && <Modals setModal={setModal} modal={modal} />}
    </>
  );
}

export default HomePage;
