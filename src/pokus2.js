function makePromise(fail) {

    let promise =  new Promise((resolve, reject) => {
  
      if (fail === false) {
        reject(new Error('failed'));
      } else {
        resolve("success");
      }
  
    });
  
    return promise;
  }
  
  makePromise(false).then((result) => {
    console.log(result);
    return 5;
  }, (err) => {
    console.error('error', err); 
    return 10;
  })
  .then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  }) 