
function Letter(letr){
	this.letr = letr;
	this.guessed = false;

    this.guess = function(letter){
    	if(letter === this.letr){
    		this.guessed = true;
            return true;
    	}
        return false
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