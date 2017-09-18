const $agenda = document.getElementById('agenda')

const DESPERTAR = 3000
const DUCHA     = 2000
const VESTIRSE  = 2000
const DESAYUNAR = 3000
const PLATZI    = 5000


function despertar() {
    return new Promise((resolve,reject)=>{
        setTimeout(function() {
            resolve('ahora me voy a duchar')
        }, DESPERTAR);
    })
}


function ducharse(message) {
    $agenda.textContent = message
    return new Promise((resolve,reject)=>{
        setTimeout(function() {
            resolve('ahora me voy a vestir')
        }, DUCHA);
    })
}

function vestirse(message) {
    $agenda.textContent = message
    return new Promise((resolve,reject)=>{
        setTimeout(function() {
            resolve('ahora me voy a desayunar')
        }, VESTIRSE);
    })
}

function desayunar(message) {
    $agenda.textContent = message
    return new Promise((resolve,reject)=>{
        setTimeout(function() {
            resolve('Ahora estudio en platzi')
        }, DESAYUNAR);
    })
}

function platzi(message) {
    $agenda.textContent = message
    return new Promise((resolve,reject)=>{
        setTimeout(function() {
            //resolve('que divertirdo')
            reject('mierda error error')

        }, PLATZI);
    })
}

function terminado(message){
    $agenda.textContent = message
}



function error(message) {
    $agenda.style.color = 'red';
    $agenda.textContent = message
}

//con return como devuelve una promesa yo puedo con .then ejecutar los siguiente
despertar()
   .then(ducharse)
   .catch(error)
   .then(vestirse)
   .then(desayunar)
   .then(platzi)
   .catch(error)
