let sum = 0;
process.argv.forEach((el, index)=>{
	if (index >= 2){
		sum += Number(el);
	}
});
console.log(sum);


