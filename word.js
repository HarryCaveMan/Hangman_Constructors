const wordList = ['grenadine',
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


const letr = require('./letter.js');

function Word(str){
	this.letterArray =[];
	for(let i=0 ; i<str.length ; i++){
		this.letterArray.push(letr.Letter(str[i]))
	}
	this.toString = function(){
		let output = [];
		for(let i=0 ; i<this.letterArray.length ; i++){
			output.push(this.letterArray[i].display());
		}
		return output.join('');
	}
}


exports.Word = function(){
	return new Word(wordList[Math.floor(Math.random()*wordList.length)].toLowerCase());
}