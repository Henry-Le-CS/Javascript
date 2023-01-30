//3 ways to create arrays
//1.
var arr1 = [3,2,2,4]
//2.
var arr2 = new Array()
arr2[0] = 'world'
arr2[1] = 'hello'
//3.
var arr3 = new Array('a','b','c')
console.log(`Array 1: ${arr1}`)
console.log(`Array 2: ${arr2}`)
console.log(`Array 3: ${arr3}`)
console.log(arr2)
//METHODS
//1. Concat
arr4 = arr1.concat(arr2,arr3)
console.log(`Array 4: ${arr4}`)
//2. Every()
function Below2(value){
    return (value<2)
}
console.log(arr1.every(Below2))
//3. Some()
var arr5 = [100,99,8,2,5]
function isBig(value){
    return !(value>=100)
}
console.log(arr5.some(isBig))
//4.filter()
var arr6 = arr5.filter(isBig)
console.log(arr6)
//5. findIndex()
var arr7 = arr6.findIndex(Below2)
console.log(arr7)

//6.For each

arr5.forEach(function(element){
    if(element%5==0) console.log(element)
})

//7.Include

console.log(arr5.includes(2))
//8. IndexOf/LastIndexOf

function run(data){
	var first = data.indexOf(2)
	var last = data.lastIndexOf(2)
	if(first == -1){
		console.log('No result')
	}
	else console.log(`${first} ${last}`)
}

run(arr5)

//8. Array.join([Seperator])

var a = ['Wind', 'Water', 'Fire'];
str = a.join([': ']);      // 'Wind: Water: Fire'
console.log(str)
//9.Map()

function abso(value){
	if(value<0) value*=-1
	return value
}
function run2(data) {
	var datas =  data.map(abso)
	console.log(datas)
}

run2([-1,3,4,-8,5])

//10. Array.shift(), Array.unshift, Array.pop(), Array.push()
var firstEl = arr3.shift()
console.log(firstEl)
console.log(arr3.unshift('3','5'))
console.log(arr3)

//11 Reverse()

arr3 = arr3.reverse()
console.log(arr3)

//12. Array.sort()

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];

function compare(a,b){
    return -(a.value - b.value)
}
//compare(a,b) -> <0 -> a before b, > 0 -> b before a
console.log(items.sort(compare))