
function Letter(letr){
	this.letr = letr;
	this.guessed = true;

    this.guess = function(letter){
    	if(letter === this.letr){
    		this.guessed = true;
    	}
    }
    this.display = function(){
    	if (this.guessed){
    		return letr;
    	}
    	else{ return "_"; }
    }
}

exports.Letter = function(input){
	return new Letter(input);
}