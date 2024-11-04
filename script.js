function reverseString(str){
    return str.split('').reverse().join('');
}
ch1=reverseString('hello');
console.log(ch1);

function CountCharacters(str){
    var count=0;
    for(let i=0;i<str.length;i++){
        count++;
    }
    return count;
}
ch2=CountCharacters('hello');
console.log(ch2);

function CapitalizeWords(str){
    var res=str;
    res=res[0].toUpperCase()+res.slice(1);
    for(let i=0;i<str.length;i++){
        if(str[i]==' '){
            res=res.slice(0,i+1)+str[i+1].toUpperCase()+res.slice(i+2);
        }
    }
    return res; 
}
ch3=CapitalizeWords('hello world amine'); 
console.log(ch3);


function maxmin(arr){
    var max=arr[0];
    var min=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return [min,max];
}
arr=[1,2,3,4,5];
ch4=maxmin(arr);
console.log(ch4);

function sumarr(arr){
    var sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
arr=[1,2,3,4,5];
ch5=sumarr(arr);
console.log(ch5);



function filterArray(arr, condition) {
    var arrpair = [];
    for (let i = 0; i < arr.length; i++) {
      if (condition(arr[i])) {
        arrpair.push(arr[i]);
      }
    }
    return arrpair;
  }

  
  var arr = [1, 2, 3, 4, 5];
  var condition = function(num) {
    return num % 2 === 0;
  };
  
  var filteredArr = filterArray(arr, condition);
  console.log(filteredArr);



  function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  var n = 5;
  var result = factorial(n);
  console.log(result);

  //Npremier : Create a function to check if a number is prime or not.


  function Npremier(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  var n = 13;
  var test = Npremier(n);
  if (test){
    console.log(n + " est un nombre premier");
  }
  else{
    console.log(n + " n'est pas un nombre premier");
  }


  function suitefibonacci(n) {
    var arr = [0, 1];
    for (let i = 2; i < n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr;
  }
  
  var n = 10;
  var result = suitefibonacci(n);
  console.log(result);



