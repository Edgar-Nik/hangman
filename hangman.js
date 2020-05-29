



const words = ["apple","orange","banana","water","earth","rock","austranaut","human","poetry","damage",
"cookies","adult","garage","policeman","positive","monkey","zoo","wolf","soap","nuts","rhyme","memory",
"mathematics","hunter","image","border","donkey","brick",];


const gameStarter = document.querySelector(".game-start");
const startBtn = document.querySelector(".start-btn");

function resetGame(){
word = words[Math.floor(Math.random()*words.length)];
guessWord=[];
 wrongLetters = [];
 wrongletterCounter=0;
 usedLetter='';
 wrongLettersDiv.innerHTML='';
 hangmanPic.innerHTML='';

 lettersRemaining = word.length
 for(let i = 0; i < word.length; i++){
    guessWord[i]='_';
}
 mainWord.innerHTML = `<p>${guessWord.join(" ")}</p>`;
}


startBtn.addEventListener("click",function(){
	gameStarter.style.display="none";
	resetGame();
})


let word = words[Math.floor(Math.random()*words.length)];
let guessWord=[];
let wrongLetters = [];
let wrongletterCounter=0;
let usedLetter='';




const wrongLettersDiv = document.querySelector(".wrong-letters");
let hangmanPic = document.querySelector(".hangman-pic");

for(let i = 0; i < word.length; i++){
    guessWord[i]='_';
}

let lettersRemaining = word.length;

const inputBtn = document.querySelector(".submit-btn");


const mainWord = document.querySelector(".main-word");
mainWord.innerHTML = `<p>${guessWord.join(" ")}</p>`;
	mainWord.style.color=' #C6F7FA';


const calculateGame = function(letter,main){
	let boolean = false;
		
		if(+letter || !letter){
			alert('Type only letters!!!');
			return;
		}

		for(let x=0;x<usedLetter.length;x++){
			if(letter===usedLetter[x]){
				alert("used!!!");
				return;
			}

		}
		for(let i=0;i<word.length;i++){
			if(letter.toLowerCase() === main[i]){
				guessWord[i]=letter.toLowerCase();
				boolean=true;
				mainWord.innerHTML = `<p>${guessWord.join(" ")}</p>`;
				lettersRemaining--;
			}
		}
		if(boolean===false){
			wrongletterCounter++;
			wrongLetters.push(letter);
			hangmanPic.innerHTML =`<img src='${wrongletterCounter}.png' class="picture" />`;
			wrongLettersDiv.innerHTML= `<p>${wrongLetters.join( )}</p>`
		}


	 	if(lettersRemaining===0 && (guessWord.join('')===word)){
	 		alert("Congrats You Won!!!");
	 		setTimeout(function(){
	 			gameStarter.style.display="inline-block";
	 		}, 2500);

		}

		if(wrongLetters.length === 5){
			alert("You Lose");
			
			mainWord.innerHTML=`<p>${word}</p>`;
			mainWord.style.color='#ffffff';
			setTimeout(function(){
	 			gameStarter.style.display="inline-block";
	 		}, 2500);

		}

	usedLetter+=letter.toLowerCase();
}



inputBtn.addEventListener("click",function(){
	let guessLetter = document.querySelector(".user-guess").value;
    document.querySelector(".user-guess").value='';
    calculateGame(guessLetter,word);

})





