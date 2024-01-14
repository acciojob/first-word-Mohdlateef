function firstWord(s) {
  // your code here
	let flag=0;
	if(s.length===0)
	{
		let str1="''"
		
		return str1;
	}
let str="'"
	for(let i=0;i<s.length;i++)
	{	
		if(s[i]>='A'&&s[i]<='Z'||s[i]>='a'&&s[i]<='z'||s[i]>=0&&s[i]<=9)
		{
			str=str+s[i];
			flag =1;
		}
		else if(flag===1)
		{
			break;
		}

}
	str=str+"'"
	return str;
	
}


// Do not change the code below






const s = prompt("Enter String:");
alert(firstWord(s));
