function getKey() {
    return 'attr2'
}

let obj1

obj1 = {
    attr1: 5,
    attr2: 'foo',
}

//_____________________________

let obj2

obj2 = {
    attr1: 5,
    attr2: 'foo2',
}

let arr = [getKey, obj2, 5, 6]
let obj3 = {}

arr.forEach((e, i) => {
    if (i === 0) {
        console.log(obj1[e()])
        console.log(obj2[e()])
        obj3.a1 = obj1[e()]
        obj3.a2 = obj2[e()]
    } else {
        console.log(e)
    }
})

console.log('___________')
console.log(obj3)
