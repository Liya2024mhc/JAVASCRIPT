const  score =300;
console.log(score);

const balance = new Number(1000);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));

const otherNum = 28.9594              //29     //28.95             
console.log(otherNum.toPrecision(4)); //2      //4

const hundreds = 1000000  //1,000,000
console.log(hundreds.toLocaleString('en-IN')) //10,00,000

//+++++++++++++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-3))
console.log(Math.round(5.8)) //--- ceil( 4.2 => 5) and floor --- ( 4.9 => 4)

console.log(Math.random()); //0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9
console.log((Math.random()*10)+1); //3.342979968690777
