const minimum = 1;
const maximum = 100;

const answer = Math.floor((Math.random() * (maximum - minimum)) = minimum);
let guess;
let running = true;
let attemts = 0;

while(running){
    guess =  window.prompt(`Choose a number between ${minimum} - ${maximum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        console.log();
        
    }

}


