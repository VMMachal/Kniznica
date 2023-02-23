function eight() {
    let nieco = 8
    return nieco
}

function addAndMultiply(a, b) {
    if (!b) {
        let c = 10
        b = c
        console.log(c)
    }

    let result = a + b
    result = 2 * result
    return `${result}` + eight() + (eight() - 2)
}

function convertStringToNumber(str) {
    return Number(str)
}
let a
a = addAndMultiply(2)
a = convertStringToNumber(a)

console.log(a)
