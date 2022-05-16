const zucchine = [{
        varietà: "nera",
        peso: "100",
        lunghezza: "10",
    },

    {
        varietà: "romana",
        peso: "100",
        lunghezza: "10",
    },

    {
        varietà: "fiorentina",
        peso: "100",
        lunghezza: "10",
    }
]

// var zuc = {}
// Object.keys(zucchina1).forEach(function(a) {
//     zuc[a] = zucchina1[a] + zucchina2[a]

// })
let sum = 0;
for (let i = 0; i < zucchine.length; i++) {
    sum += zucchine[i].peso;

}
console.log(sum)