// - Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.
console.log('-------------------------------- SNACK 1 --------------------------------');

const bikes = [
	{
		name: 'Bici A',
		weight: 800,
	},
	{
		name: 'Bici B',
		weight: 500,
	},
	{
		name: 'Bici C',
		weight: 600,
	},
	{
		name: 'Bici D',
		weight: 400,
	},
	{
		name: 'Bici E',
		weight: 220,
	},
	{
		name: 'Bici F',
		weight: 750,
	},
	{
		name: 'Bici G',
		weight: 876,
	},
];

let currentWeight;
let minWeight = 100000000;
let minWeightBikeIndex;

for (const bikeIndex in bikes) {
	currentWeight = bikes[bikeIndex].weight;
	if (currentWeight < minWeight) {
		minWeight = currentWeight;
		minWeightBikeIndex = bikes[bikeIndex];
	}
}

console.log(`La Bici che pesa di meno è la "${minWeightBikeIndex.name}", che pesa: ${minWeight}Kg`);

// - Snack 2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
console.log('-------------------------------- SNACK 2 --------------------------------');

const teams = [
	{
		name: 'Juventus',
		points: 0,
		fouls: 0,
	},
	{
		name: 'Inter',
		points: 0,
		fouls: 0,
	},
	{
		name: 'Milan',
		points: 0,
		fouls: 0,
	},
	{
		name: 'Cagliari',
		points: 0,
		fouls: 0,
	},
	{
		name: 'Hellas Verona',
		points: 0,
		fouls: 0,
	},
	{
		name: 'Fiorentina',
		points: 0,
		fouls: 0,
	},
	{
		name: 'Como',
		points: 0,
		fouls: 0,
	},
];

// - Random number generation function
function randomNumGeneration(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
for (const i in teams) {
	teams[i].points = randomNumGeneration(0, 10);
	teams[i].fouls = randomNumGeneration(0, 10);
}
const newArray = [...teams];

for (const i in newArray) {
	delete newArray[i].points;
}

console.log('Array completo:');
console.table(teams);
console.table(newArray);

// - Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
