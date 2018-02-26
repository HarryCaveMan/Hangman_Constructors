


const wordList = ['grenadine',  //random list of words scraped during first hangman
'pomegranate',
'hefty',
'gladiolus',
'pelter',
'concretize',
'manikin',
'canvass',
'lubberly',
'cordial',
'jocular',
'Utopian',
'tamp',
'subnormality',
'obbligato',
'woodsy',
'ha-ha',
'stevedore',
'effervescence',
'bromidic',
'canoodle',
'satrap',
'congeries',
'twain',
'kittiwake',
'polysemy',
'madrigal',
'bollard',
'parvenu',
'bowdlerize',
'mountebank',
'hauteur',
'asphodel',
'annulment',
'quasi',
'Yugoslavia',
'paleobotany',
'cephalopodan',
'Serbian',
'tribunal',
'ague',
'Netherlands',
'Bosnian',
'Albanian',
'Kosovo',
'Chile',
'humiliating',
'Suharto',
'contemplate',
'Peruvian',
'oust',
'Saddam Hussein',
'subsequently',
'massacre',
'civilian',
'revolt',
'fascist',
'revered',
'regime',
'Mandela',
'triumphantly',
'Pretoria',
'culminate',
'assassinated',
'Ferdinand I',
'Suharto',
'Burmese',
'Beijing',
'Kyrgyzstan',
'Venezuela',
'charismatic',
'daw',
'upsurge',
'suffrage',
'minimal',
'insurgency',
'Sri Lanka',
'torture',
'Guatemala',
'Bangladesh',
'manipulate',
'Bolivia',
'stringent',
'vulnerable',
'prod',
'famine',
'eradicate'];

const alpha = ' abcdefghijklmnopqrstuvwxyz' //the alphabet plus spacebar

const L = require('./letter.js');  //import letter module for Letter class

function Word(str){
    this.guessed = 0;

	this.alphabet = [];
	for(let i=0 ; i<alpha.length ; i++){
		this.alphabet.push(L.Letter(alpha[i]));
	}
	this.letterArray =[];
	for(let i=0 ; i<str.length ; i++){
		this.letterArray.push(L.Letter(str[i]))
	}

	this.isSolved = function(){
		return (this.guessed === this.letterArray.length);
	}

	this.search = function(input){

		found = false;
		for(let i=0 ; i<str.length ; i++){
			if(this.letterArray[i].guess(input)){
				this.guessed++;
				found=true;
				
			}
		}
		for(let i=0 ; i<alpha.length ; i++){
			this.alphabet[i].guess(input);			
		}
		return found;
	}
	this.toString = function(){
		let output = [];
		for(let i=0 ; i<this.letterArray.length ; i++){
			output.push(this.letterArray[i].display());
		}
		for(let i=0 ; i<5 ; i++){
			output.push(' ');
		}
		for(let i=0 ; i<alpha.length ; i++){
			output.push(this.alphabet[i].display());
		}
		return output.join('');
	}
}


exports.Word = function(){
	return new Word(wordList[Math.floor(Math.random()*wordList.length)].toLowerCase());
}