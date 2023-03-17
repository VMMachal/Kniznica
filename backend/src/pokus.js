function add(m, n) {
    let result
    result = m + n
    return result
}

let a = add(2, 3)
console.log(a)

__________________________________

function add(m, n) {
    let result = m + n
    return result
}

let a = add(2, 3)
console.log(a)

__________________________________

let add

add = function (m, n) {
    let result = m + n
    return result
}

let a = add(2, 3)
console.log(a)

__________________________________

let add

add = function (m, n) {
    let result = m + n
    return result
}

let foo = add

let a = foo(2, 3)
console.log(a)

__________________________________

function add(m, n) {
    let result = m + n
    return result
}

let foo = add

let a = foo(2, 3)
console.log(a)

__________________________________

let add
add = (m, n) => {
    let result = m + n
    return result
}

let foo = add

let a = foo(2, 3)
console.log(a)

__________________________________

let add = (m, n) => {
    let result = m + n
    return result
}

let foo = add

let a = foo(2, 3)
console.log(a)

__________________________________

let add = (m, n) => m + n

let foo = add

let a = foo(2, 3)
console.log(a)

__________________________________

let gvar

let add = (m, n) => {
    let result = m + n
    gvar = result * 2
    return m + n
}

let foo = add

let a = foo(2, 3)
console.log(a)
console.log(gvar)
