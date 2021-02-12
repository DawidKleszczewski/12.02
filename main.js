const tablica = ['Leon', 'Fabian', 'Dawid', 'Kuba', 'Oskar', 'Artur', 'Kacper', 'Alicja', 'Marta', 'Roza', 'Łukasz', 'Pavlo', 'Alan', 'Kacper', 'Mateusz', 'Fabian', 'Dawid', 'Kuba', 'Oskar', 'Artur', 'Kacper', 'Alicja', 'Marta']

// tablica.forEach(item => {
//     console.log('Stare', item)
//     console.log('Nowe' + ' ' + 'Henryk')
// })

// const imiona = tablica.map(item => item = 'Henryk')
// console.log(imiona)

// const oskar = tablica.find(item => {
//     if(item === "Oskar"){
//         return item
//     }
// })
// console.log("find", oskar)

// const tablicaLiczb = new Array(1,2,3,4,5,6,7,8,9)
// console.log(tablicaLiczb)

// const wiekszeOdJedenSome = tablicaLiczb.some(item => item > 1)
// console.log(wiekszeOdJedenSome)

// const wiekszeOdJedenEvery = tablicaLiczb.every(item => item > 1)
// console.log(wiekszeOdJedenEvery)

// tablicaLiczb.push(10)
// console.log(tablicaLiczb)

// const tab = new Array()


// for(let i = 0; i < 100; i++){
//     tab.push('Jan' + i + 1)
// }
// for(let i = 0; i < 30; i++){
//     tab.pop(i)
// }
// console.log(tab)

const tab = new Array

// for(let i = 0; i < 100; i++){
//     tab.push((i + 1)* 2)
// }
// console.log(tab)

for(let i = 0; i < 1000; i++){
    if(i % 2 !== 0){
        tab.push(i)
    }
}
console.log(tab)