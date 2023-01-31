//Prototype: Allow us to add methods to a string
var a = 'Hello worl' 
String.prototype.addChar = function(char){
    return this+char
}
var a_prime = a.addChar('d')
console.log(a_prime)

String.prototype.is_big = function(){
	return this.length>=10
}
function run(name) {
	var result = name.is_big();
	console.log(result);
}

run(a_prime)

//String methods
function run1(str){
	var str = str.split(' ').map(function(word){
		var x = word.charAt().toUpperCase()
		return x.concat(word.slice(1))
	})
	console.log(str.join(' '))
} //Begin of every word is uppercase
run1(a_prime)
console.log(a_prime.split(' '))

//Decode or sth
function run2(str) {
	str = str.replace(/a|e|i|o|s/gi,function(x){
		if(x=='a') return 4
		else if(x=='e') return 3
		else if(x=='i') return 1
		else if(x=='o') return 0
		else return 5
	}).trim()
	console.log(str.trim())
}

run2('javascript')