const zucchine = [{
        varietà: "1",
        peso: "100",
        lunghezza: "18",
    },

    {
        varietà: "2",
        peso: "100",
        lunghezza: "9",
    },

    {
        varietà: "3",
        peso: "100",
        lunghezza: "6",
    },
    {
        varietà: "4",
        peso: "100",
        lunghezza: "8",
    },

    {
        varietà: "5",
        peso: "100",
        lunghezza: "50",
    },
    {
        varietà: "62",
        peso: "100",
        lunghezza: "2",
    },

    {
        varietà: "7",
        peso: "100",
        lunghezza: "30",
    },
    {
        varietà: "8",
        peso: "100",
        lunghezza: "8",
    },

    {
        varietà: "9",
        peso: "100",
        lunghezza: "5",
    },
    {
        varietà: "10",
        peso: "100",
        lunghezza: "20",
    },
];
const smallZuc = []
const bigZuc = []
let bigSum = 0;
let smallSum = 0;
let sum = 0;
for (let i = 0; i < zucchine.length; i++) {
    sum += zucchine[i].peso;
    if (zucchine[i].lunghezza > 15) {
        bigZuc.push(zucchine[i])
        bigSum += sum;
    } else {
        smallZuc.push(zucchine[i])
        smallSum += sum;
    }
    bigSum += bigZuc[i].peso;
}

console.log(bigZuc)
console.log(smallZuc)

// let sum = 0;
// for (let j = 0; j < smallZuc.length; j++) {
//     sum += smallZuc.peso[j];
// }