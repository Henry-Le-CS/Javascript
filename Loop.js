// //for loop
// function run(n){
// 	var factorial = 1;
		
// 	for(i = 1;i <= n;i++) {
// 		factorial*=i
// 	}
	
// 	console.log(factorial);
// }
// var str = 'Le trong hieu'
// run(6)

// for( i = 0; i<str.length;i++){
//     console.log(str[i])
// }
// //While
// function run2(n){
// 	var output = "";
// 	var i =1 
// 	while(i<n) {
//         if(i%2==0)
// 		    output+=i
// 		i++
// 	}
	
// 	console.log(output);
// }
// run2(7)

// //for object in objects

// function run3(){
// 	var person = {
// 		name: "Henry Le",
// 		age: 20,
// 		addr: "Long Xuyen",
// 		is_boy: true
// 	};
// 	for (i in person) {
// 	  console.log(i + ' is '+ person[i])
// 	}
// }

// run3()


// //for ... of iterable

// function run4(datas){
// 	var sum = 0
// 	for (i of datas) {
// 		if(i>0) sum+=i
// 	} 
// 	console.log(sum);
// }

// datas = [-1,2,-3,4]
// run4(datas)

// function run5(str_input ) {
// 	var n = str_input.length
//     str_temp = ''
//     for(i=n-1;i>=0;i--){
//         str_temp+=str_input[i]
//     }
//     console.log(str_temp)
// }

// run5('hello')
str = 'Le Trong Hieu'
str[2]='k'
console.log(str)