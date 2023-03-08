function getVal(par) {
    let i = par
    if (!i) {
        throw new Error('missing i')
    } else {
        return i
    }
}

function getValSafe(par) {
    try {
        return getVal(par)
    } catch (err) {
        //console.error(`error: ${err}`, err)
        throw new Error('odchytil som error a poslal som ho dalej')
    } finally {
        console.log('FINALY')
    }
}

function printVal() {
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@ cp 100')
    try {
        console.log(getValSafe(5))
    } catch (err) {
        console.log('I have swallowed the error')
        throw new Error('Here am I again')
    }
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@ cp 200')
}

printVal()
