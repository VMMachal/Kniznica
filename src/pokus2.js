function makePromise(fail) {
    let promise = new Promise((resolve, reject) => {
        if (!fail) {
            resolve('success')
        } else {
            reject(new Error('failed'))
        }

        /*if (fail === false) {
        reject(new Error('failed'));
      } else {
        resolve("success");
      }*/
    })

    return promise
}

makePromise()
    .then(
        (result) => {
            console.log(result)
            return 5
        },
        (err) => {
            console.error('error', err)
            return 10
        }
    )
    .then(
        (result) => {
            console.log(result)
            return makePromise()
        },
        (err) => {
            console.log(err)
        }
    )
    .then((result) => {
        console.log(result)
    })
