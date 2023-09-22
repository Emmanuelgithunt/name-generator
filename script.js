const result = document.getElementById('name');

const name1 = [
    "Emmanuel","Divine","James","Kenneth","David","Daniel","Samuel","John","Mathew"
];

function generate() {
    const random = getRandomNames();
    result.innerHTML = random;
}

function getRandomNames() {
    const randomIndex = Math.floor(Math.random() * name1.length);
    return name1[randomIndex]
}

function reset() {
    const reset = null
    result.innerHTML = reset;
}