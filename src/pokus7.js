function getAttributeName() {
    return "attr";
  }
  
  let obj = {
    attr1: "foo",
    attr2: 5
  }
  
  
  console.log(obj.attr1);
  console.log(obj[getAttributeName() + "2"]);

let name1 = "foo1"
let name2 = "foo1"

let obj2 = {
  name1: name1,
  name2: name2
}
let obj3 = {
    name1,
    name2
  }

console.dir(obj3);

