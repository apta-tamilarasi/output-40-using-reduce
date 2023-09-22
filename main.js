const numbers = [1, 2, 3, 4, 5];

// output:40

// Using reduce method

document.write(`Given object = ${JSON.stringify(numbers)}<br><br>`)

let n=numbers.reduce(function(a,b){
   
    return a*b
})

document.write(`OUTPUT = ${n/3}`)