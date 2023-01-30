//String data type:
var a = "Let's read 'Harry Potter'";
var b = 'We\'ll never give up';
console.log('String data type: ', a, ';', b)
//Number data type:

var numA = 4.25e+6
var numB = 80.5
console.log('Number data type: ', numA,'; ', numB)
console.log('Infinity: ', 16/0, '; ', 16/-0)
console.log('NaN: ',Math.sqrt(-1))
var nullExample = null
console.log('Null type: ', nullExample)

// Object Data type

var empty = {}
console.log('Empty object: ',empty)
var person = {'name': 'Hieu', 'age': 18}
console.log('Person\'s name:',person['name'],',Age:',person['age'])

//Array type

var colors = ['Red','Green', 'Blue','Black']
console.log('Colors are: '+colors[0]+', '+colors[3])

//Function data type

var functionTest = function(){
    return "I test my function"
}

console.log('The type of function '+ typeof functionTest)
console.log('Run it: ',functionTest())
