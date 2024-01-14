function firstWord(s) {
  // your code here

	
	
	let str =s.split(' ');
	let str2=`"`
	str2+= str[0];
	 str2+=`"`;
	return str2;
}


// Do not change the code below


const s = prompt("Enter String:");
alert(firstWord(s));
