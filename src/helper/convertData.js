const convertData = (data , type) => {
const newData=data[type].map((item)=>{
return {
    data:item[0],
    [type]:item[1]
}
})
return newData;
};
export { convertData };
