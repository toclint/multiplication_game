const Problems = {};
Problems.SHIP1 = {};

Problems.VALUES = [];
const TOTAL_PROBLEMS = 5;


export const GetAllProblems = () => {
    console.log("*************  GENERATE PROBLEMS *********")

    const denoms = getUniqueRandomIntegers(5, 1, 12);
    const numerators = getUniqueRandomIntegers(5, 1, 12);    
    console.log("originals " + denoms + " nums: " + numerators)
    const answers = [];
    for( let i = 0; i < TOTAL_PROBLEMS; i++){
        answers[i] = denoms[i] * numerators[i];
        let answer = denoms[i] * numerators[i];

        let groupData = new Array(
            {numerator:numerators[i], denominator:denoms[i], answer:answer, iscorrect: true}, 
            {numerator:numerators[i], denominator:denoms[i], answer:answer+ 5, iscorrect: false},
            {numerator:numerators[i], denominator:denoms[i], answer:answer -5, iscorrect:false}
         )

         let shuffled = shuffle(groupData);
        Problems.VALUES[i] = shuffled;
    }
    
    
    const problem1 = Problems.VALUES[0][0] 
    console.log( "Problems[0][0]: numerator " + problem1.numerator + " denominator: " + problem1.denominator + " answer: " + problem1.answer + " iscorrect: " + problem1.iscorrect)
    Problems.SHIP1.denominator = getRandomInt(12);
    Problems.SHIP1.numerator = getRandomInt(12);
    Problems.SHIP1.answer = Problems.SHIP1.denominator * Problems.SHIP1.numerator;
    Problems.SHIP1.iscorrect = false;
    return Problems;
}

function getUniqueRandomIntegers(count, min, max) {
    const uniqueNumbers = new Set();
    while (uniqueNumbers.size < count) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      uniqueNumbers.add(randomNumber);
    }
    return Array.from(uniqueNumbers);
  }

function getRandomInt(max) {
    return Math.floor(Math.random() * max)+1;
}

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

export const GetData = () => {
    return Problems;
}