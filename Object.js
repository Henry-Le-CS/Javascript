//There are 3 ways to create objects

//1.Objects by literal
var object1 ={
    property1: 1,
    property2: 2,
    property3: 3
}
//2. Objects directly
var object2 = new Object()
object2.property1 = 1
object2.property2 = 2
object2.property3 = 3
object2.property4 = 4
console.log(object2.property4)
//3. Using an object constructor
//Use a function, "this"
function person(name, year){
    this.name = name
    this.year = year
}
var person1 = new person("Henry Le", 2003)
console.log('Person\'s name: '+person1.name+' ,born in: '+person1.year)
for(const [key,value] of Object.entries(person1)){
    console.log(`${key}: ${value}`)
}
function run() {
	var person  = {
		firstName:"Trung",
		lastName:"Vuong",
		age:50,
		eyeColor:"blue"
	};
	lst = Object.values(person);
	for(i of lst){
		console.log(i)
	}
}