const limitedNumber = (num,min,max,min_res,max_res) => {
  if(num>max){
    return max_res
  }
  if(num<min){
    return min_res
  }
  return num
}

// 一维数组转多维数组
// ["a", "b", "c", "d",'e'], 2 => [['a', 'b'],['c', 'd'],['e']]
function chunk(arr, size) {
  const newArr =[];
  arr.forEach((_,index)=>{
    if(index%size===0){
      const brr = arr.slice(index,index+size)
      newArr.push(brr);
    }
  })
  return newArr;
}

export {limitedNumber,chunk}
