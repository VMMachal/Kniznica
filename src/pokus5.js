const obj = { a: 1, b: 2 }
const { a, b } = obj
// is equivalent to:
// const a = obj.a;
// const b = obj.b;
/*function vypozickaCreate1() {
}*/
function vypozickaVratenieKnihy1() {}
function vypozickaGet1() {}
function vypozickaGetHistoryOfVypozickaForStudent1() {}

const modObj = {
    vypozickaCreate: {
        attr1: 'val1',
        attr2: 'val2',
    },
    vypozickaVratenieKnihy: vypozickaVratenieKnihy1,
    vypozickaGet: vypozickaGet1,
    vypozickaGetHistoryOfVypozickaForStudents:
        vypozickaGetHistoryOfVypozickaForStudent1,
}

const {
    vypozickaCreate: { attr1: foo1 },
} = modObj
//let foo = modObj.vypozickaCreate;
//let attr1 = foo.attr1;
console.log(foo1)

function printString({ vypozickaCreate: { attr1: str } }) {
    console.log(`@@@@@@@@@@@ cp 500:${str}`)
}
printString(modObj)
