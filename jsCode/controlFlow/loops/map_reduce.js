const mynums=[1,2,3,4,5];

const newNums=mynums.map((num)=> num+10);
console.log(newNums)

//chaining

const numss=mynums.map((val)=>val*10).
map((val1)=>val1+1).filter((val3)=>val3>70)
console.log(numss);

//reduce

const initial_val=0;
const sum=mynums.reduce((acc,cu_val)=>acc+cu_val,initial_val)
console.log(sum)