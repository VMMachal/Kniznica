let obj = {
    attr1: 5,
    attr2: 'val2',
    attr3: 'val3',
}

//let obj1 = obj;
//obj1.attr4 = 'val4';
//let obj1 = {...obj}
let obj1 = { ...obj, atrr4: 'val4' }

obj1.attr2 = 'foo'

console.log(`obj.attr2: ${obj.attr2}`)
console.log(`obj1.attr2: ${obj1.attr2}`)
console.dir(obj1)

let arr = [3, 4, 5]

//let arr1 = arr;
let arr1 = [...arr, 9]

arr1[2] = 6

console.dir(arr)
console.dir(arr1)
