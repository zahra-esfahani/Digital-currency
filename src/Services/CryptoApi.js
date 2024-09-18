const Base_Url="https://api.coingecko.com/api/v3";
const Api_Key="CG-yaJSx4Vs9GeJtd7NnHv4v4Vq";
const getCoinList = (count , country) => {

  return `${Base_Url}/coins/markets?vs_currency=${country}&order=market_cap-desc&per_page=20&page=${count}&x_cg_demo_api_key=${Api_Key}`;
};
const searchHandler=(query)=>{
  return `${Base_Url}/search?query=${query}&x_cg_demo_api_key=${Api_Key}`;
}
const marketChart=(coin)=>{
  return `${Base_Url}/coins/${coin}/market_chart?vs_currency=usd&days=7`
}
export {getCoinList , searchHandler ,  marketChart}
  