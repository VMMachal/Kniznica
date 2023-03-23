let fn = 5;
function makeLogNumber() {
    let n = fn;
    let m = 5;
    function logNumber(){
        return n+m
    }
    function logNumber2(){
        return n-m
    }
    function both(){
        let result = logNumber()+logNumber2()
        return result
    }
  
    return both
  }
  


  console.log(makeLogNumber()());
  