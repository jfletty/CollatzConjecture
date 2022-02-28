const runType: string = process.argv[2];
const isRandom: boolean = runType === "random" ? true : false;

const randomInt = (min: number = 1, max: number = 1000000): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let initialNumber: number = isRandom ? randomInt() : 1
const finalPattern: Array<number> = [4, 2, 1];

const equals = (a: Array<number>, b: Array<number>) =>
    a.length === b.length &&
    a.every((v: number, i: number) => v === b[i]);


while (true) {
    var x = initialNumber;
    var currentPatten: Array<number> = [];
    currentPatten.push(x);
    while (!equals(currentPatten.slice(-3), finalPattern)) {

        if (x % 2) { // odd
            x = x * 3 + 1;
        } else { // even
            x = x / 2;
        }
        currentPatten.push(x);
    }
    console.log("Index: " + initialNumber + " completed in " + currentPatten.length + " iterations");
    isRandom ? initialNumber = randomInt() : initialNumber++;
}