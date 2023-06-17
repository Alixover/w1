// let name=["test","mamad","hasan"];

// const { RequiredError } = require("openai/dist/base");


// console.log(name[1]);

// let a =40;
// let b = 30;
// let jam= a+b;
// let zarb= a*b;
// let taghsim= a/b;
// let menha =a-b;
// console.log(jam,menha,zarb,taghsim,);

// let mashin1 = "samand";
// let mashin2 = "vanet";
// let mashin3 = "pars";


// const cars = ["vanet", "samand", "pars"];
// let car = cars[1];
// console.log(car);

// let i 
// let a = 100
// console.log("All even numbers from 1 to 100")
// for (i=1;i<=a;i++)
// {
//   if(i%2==0){
//     console.log(i)
//   }
// }

// for ( let nezam = 120; nezam <= 1000; nezam++ )      {


//   if ( nezam % 5 === 0 )    {


//     console.log(nezam);

//   }
// }


// ___________ برنامه زوج یا فرد بودن عدد با وارد کردن یک عدد ________________________


// تعریف تابع برای شناسایی اعداد زوج و فرد
// function isEven(number) {
//   return number % 2 === 0;
// }

// // تعریف تابع برای پرینت کردن نوع آن (زوج یا فرد بودن)
// function printNumberType(number) {
//   if (isEven(number)) {
//     console.log(`adad ${number} zoj ast`);
//   } else {
//     console.log(`adad ${number} fard ast`);
//   }
// }

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('yek adad vared konid:', input => {
//   const number = parseInt(input);
//   if (isNaN(number)) {
//     console.log('bayad vorodi adad bashe horof type kardid');
//   } else {
//     printNumberType(number);
//   }
//   readline.close();
// });



// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];


// for ( let y = 0; y < numbers.length; y++  ) {

//   const number = numbers[y];

//   if (number % 2 === 0) {

//     console.log(number + ' zoj ast');

//   } else {
    
//     console.log(number + ' fard ast');
//   }
// }

// moratab kardan adad ha
    // function sortNumbers(numbers) {
    //     numbers.sort(function(a, b) {
    //     return a - b;
    //     });
    //     return numbers;
    // }
    
    
    // console.log(sortNumbers([12, 69, 1380, 1, 5, 90])); 
// bar ax kardan string ha
//     function reverseWords(string) {
//           const words = string.split(' ');
//           const reversedWords = [];
//         for (let i = 0; i < words.length; i++) {
//                                                   const word = words[i];
          
//                     const reversedWord = word.split('').reverse().join('');
         
//                     reversedWords.push(reversedWord);
//         }
//         return reversedWords.join(' ');
//       }
      
//                           const inputString = 'seyed ali nezam';
//       const reversedString = reverseWords(inputString);
//       console.log(reversedString);

// مجموع اعداد
// function calculateSum(numbersArray) {
   
   

 
//     let sum = 0;
    
//     for (let i = 0; i < numbersArray.length; i++) {
             
//            sum += numbersArray[i];
//     }
//                console.log('jame araye ha ', sum);
//   }
  
  
 
//   const adadha = [1380, 75, 96, 88, 69];
//   calculateSum(adadha); 
// main.js


// function countCharacters(str) {
   
//     const charCount = {};
//                            for (let i = 0; i < str.length; i++) {
//       const char = str[i];
//                                     if (charCount[char]) {  
//                                   charCount[char]++;
//                                      } else {
//         charCount[char] = 1;
//       }
//     }
    
//                        for (const [char, count] of Object.entries(charCount)) {
//                        console.log(`tdad tekrar ${char} dar reshte:   ${count}`);
//     }
//   }
//   countCharacters("seyed ali nezam");








// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let mergedArr = arr1.concat(arr2.reverse());

// for (let i = mergedArr.length - 1; i >= 0; i--) {
//   console.log(mergedArr[i]);
// }

// const fs= require("console");
// var nam1 =[1,2,3];
// var nam2 =[4,9,10];
// var marg = nam1.concat(nam2);
// marg.sort(function(a,b){return a-b});
// marg.reverse().forEach(item=>{
//     console.log(item)
// })
// const fs=require("fs")
// let text=fs.readFileSync("readfile.txt").toString()
// let arr1=text.split("-")
// let alldata=[];
// arr1.forEach(item=> {
//     let arra0rg=item.split(",")
//     arra0rg.forEach(item2 => {
//        alldata.push(item2)
//     });
    
   
// })

// let sortedArray=alldata.sort(function(a,b) {
//     return a-b;
// })


// fs.writeFileSync("readfile.txt",sortedArray.reverse().join("_"))

// function deleteBeforeS(list) {
//     const regex = /s(.*)/; // define a regular expression pattern for strings that contain "s"
//     const result = list.map((text) => {
//       const match = text.match(regex);
//       const myList = ['hello', 'world', 'start', 'sky'];
// const result = deleteBeforeS(myList);
// console.log(result); // ['tart', 'ky']
//       return match ? match[1] : text;
//     });
//     return result;
//   }



// const http=require("http")

// const server=http.createServer(function(req,res){

//   let result= req.url;
  

// res.end("salam" + req.url)

// })

// server.listen(1380,"127.0.0.1" ,function(){
//   console.log( "server dar hal ejra ast")
// })

// const http = require("http");

// const server = http.createServer(function (req, res) {
//   const urlParams = req.url.split("/"); 
//   const num1 = parseInt(urlParams[1]); 
//   const num2 = parseInt(urlParams[2]);  
//   const sum = num1 + num2; 
  
//   res.end(`jame adad ${num1} va ${num2} mosavi aast ba ${sum}`); 
// });

// server.listen(1380, "127.0.0.1", function () {
//   console.log("server dar hal ejra ast");
// });

// const http = require("http");

// const server = http.createServer(function (req, res) {
//   const urlParams = req.url.split(","); 
  
//   const num1 = parseInt(urlParams[1]); 
//   const num2 = parseInt(urlParams[0].slice(1,10000)); 
//   const sum = num1 + num2; 
  
//   res.end(`jame ${num1} va${num2} barabar ast ba: ${sum}`); 
// });

// server.listen(1380, "127.0.0.1", function () {
//   console.log("server dar hal ejra ast");
// }); 

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let users = {};

// Register a new user
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (users[username]) {
    return res.status(400).json({ error: 'User already exists' });
  }
  users[username] = {
    password,
    currencies: {
      USD: 100,
      IRR: 20000,
    },
    transactions: []
  };
  return res.json({ message: 'User created successfully' });
});

// Authenticate user and return their account information
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users[username];
  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  return res.json({
    username,
    USD: user.currencies.USD,
    IRR: user.currencies.IRR,
    transactions: user.transactions
  });
});

// List all registered users
app.get('/users', (req, res) => {
  return res.json(users);
});

// add money to user's account
app.post('/add-money', (req, res) => {
  const { username, currency, amount } = req.body;
  const user = users[username];

  if (!user) {
    return res.status(400).json({ error: 'Invalid user' });
  }

  if (!(currency in user.currencies)) {
    return res.status(400).json({ error: 'Invalid currency' });
  }

  user.currencies[currency] += amount;

  return res.json({ message: 'Money added successfully', [currency]: user.currencies[currency] });
});

// Transfer money from one user to another in their chosen currency
app.post('/transfer', (req, res) => {
  const { from, to, amount, currency } = req.body;
  const sender = users[from];
  const receiver = users[to];

  if (!sender || !receiver) {
    return res.status(400).json({ error: 'Invalid user(s)' });
  }

  if (!(currency in sender.currencies) || !(currency in receiver.currencies)) {
    return res.status(400).json({ error: 'Invalid currency' });
  }

  if (sender.currencies[currency] < amount) {
    return res.status(400).json({ error: 'Not enough balance' });
  }

  sender.currencies[currency] -= amount;
  receiver.currencies[currency] += amount;

  sender.transactions.push({ to, amount: -amount, currency, date: new Date() });
  receiver.transactions.push({ from, amount, currency, date: new Date() });

  return res.json({ message: 'Transfer successful' });
});
app.listen(3000, () => {
    console.log('Server started on port 3000');
  });


