function firstWord(s) {
  // your code here

	
	
let arr=	s.split(" ");
	let str2=`"${arr[0]}"`
	
	return str2;
}


// Do not change the code below


const s = prompt("Enter String:");
alert(firstWord(s));
