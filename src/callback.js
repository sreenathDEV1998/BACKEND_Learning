const add = (arr, sum) => {
    let totalsum = arr.reduce((total, first)=>{
        return total + first;
    })
    sum(totalsum)
}

add([1,2,3,4,5,6,7,8,9,10],printFunct);


const printFunct = (sum) =>{
    console.log(sum)
}