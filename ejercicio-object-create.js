const Punto = {
  init: functioninit (x,y){
    let obj = Object.create(this)
    obj.x = x;
    obj.y =y;
    return obj
  },
  moverEnX: functionmoverEnX(x) {
    this.x += x
  },
}

let p1 = Punto.init(1,4) // nos evitamos hacer la asignación de forma manual
