const callBack  = (fn,name)=>{
  fn(name)
}

const sayHi  = (name)=>{
    console.log('Hi ' + name)
}
callBack(sayHi,'admin')


