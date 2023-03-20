let kniznice = [
    {
      meno: 'meno1',
      popis: 'popis1'
    },
    {
      meno: 'meno2',
      popis: 'popis2'
    },
    {
      meno: 'meno3',
      popis: 'popis3'
    }
  ]
  
  function KniznicaLine(kniznica) {
    return `<tr><td> ${kniznica.meno} </td><td> ${kniznica.popis} </td></tr>`
  }
  
  function Lines() {
    let arr = kniznice.map((k) => {
      return KniznicaLine(k)
    })
    return arr;
  }
  
  let arr = [1,2,3].map((n) => 2*n)
  console.dir(arr);

  arr = [1,2,3].map((n) => {
    return 2*n
  })
  console.dir(arr);
  
  arr = [1,2,3].map(function (n) {
    return 2*n
  })
  console.dir(arr);