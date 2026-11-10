//Laços de repetição

// Laço For

for (let contadora = 0; contadora <= 100; contadora++) {
    console.log(contadora)
}

console.log("");

const carros = ["Porshe", "Audi", "Mercedes", "BMW"];

let TamanhoArray = carros.length;

for (let acumuladora = 0; acumuladora < TamanhoArray; acumuladora++) {
    console.log(carros[acumuladora])
}

console.log("");

// Laço While

let acumuladora = 0;

while (acumuladora <= 10) {
    console.log(acumuladora)

    acumuladora++;
}

//Laço Do While

let acumuladora2 = 0;

do {
    console.log(acumuladora2);
    acumuladora2++;
} while (acumuladora2 <= 10);