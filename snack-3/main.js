const cars = [{
        marca: "fiat",
        modello: "punto",
        alimentazione: "benzina",
    },

    {
        marca: "mercedes",
        modello: "slk",
        alimentazione: "metano",
    },

    {
        marca: "toyota",
        modello: "go",
        alimentazione: "elettrica",
    },

    {
        marca: "renault",
        modello: "twingo",
        alimentazione: "gpl",
    },

    {
        marca: "bmw",
        modello: "x5",
        alimentazione: "metano",
    },

    {
        marca: "nissan",
        modello: "micra",
        alimentazione: "diesel",
    },

    {
        marca: "ford",
        modello: "focus",
        alimentazione: "metano",
    },

    {
        marca: "dacia",
        modello: "duster",
        alimentazione: "benzina",
    },

    {
        marca: "toyota",
        modello: "corolla",
        alimentazione: "metano",
    },

    {
        marca: "mercedes",
        modello: "eqe",
        alimentazione: "diesel",
    }
]

const carsDiesel = cars.filter((elm) => {
    if (elm.alimentazione === "diesel") {
        return true;
    }
    return false;
})
console.log(carsDiesel);

const carsBenzina = cars.filter((elm) => {
    if (elm.alimentazione === "benzina") {
        return true;
    }
    return false;
})
console.log(carsBenzina);