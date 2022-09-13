function removeDuplicates(obj) {
    const dataArr = [];

const resultArr = dataArr.filter((data,index)=>{
  return dataArr.indexOf(data) === index;
})
return(resultArr);
}

module.exports = removeDuplicates;
