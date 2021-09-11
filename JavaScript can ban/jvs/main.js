//  khai bao bien va xuat bien
// var fullName = 'Nguyen Quoc Viet'
// var age = 26;

// goi ham thong bao
// alert(fullName);
// alert(age);

// // Using slice, create newCar from myCar.
// let myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }
// let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997']
// let newCar = myCar.slice(0, 2)

// // Display the values of myCar, newCar, and the color of myHonda
// //  referenced from both arrays.
// console.log('myCar = ' + JSON.stringify(myCar))
// console.log('newCar = ' + JSON.stringify(newCar))
// console.log('myCar[0].color = ' + myCar[0].color)
// console.log('newCar[0].color = ' + newCar[0].color)

// // Change the color of myHonda.
// myHonda.color = 'purple'
// console.log('The new color of my Honda is ' + myHonda.color)

// // Display the color of myHonda referenced from both arrays.
// console.log('myCar[0].color = ' + myCar[0].color)
// console.log('newCar[0].color = ' + newCar[0].color) 

// var languages = [' PHP ', 'DART', 'JAVA, ANGULAR, REACT']
// console.log(JSON.stringify(languages))

// console.log(JSON.stringify({x:5,y:6}))

// console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));

// console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// // ==> 2006-01-02T08:04:05.000Z T08 Mui gio +7

// console.log((new Date(2006, 0, 2, 15, 4, 5)))
// // ==> Mon Jan 02 2006 15:04:05 GMT+7 (Gio Dong Duong) 8+7 ==> 15
// console.log(JSON.stringify([new Set([1]), new Map([[1, 2]]), new WeakSet([{a: 1}]), new WeakMap([[{a: 1}, 2]])]))

// function showDialog()
// {
//     alert('HI chao cac ban');
// }
// showDialog();


// function writeLog(message, message2)
// {
//     console.log(message);
//     console.log(message2);
// }

// writeLog('Hello', 'GOODBYE');

// function writeBox(){
//    var myString = '';
//    for (var param of arguments)
//    {
//        myString += `${param} -`
//    }
//    console.log(myString)
// }
// writeBox('Log 1', 'Log 2', 'Log 3');



// function writeName(){
//     var space = '';
//     for(var Name of arguments)
//     {
//         space += `${Name} `
//     }
//     console.log(space)
// }
// writeName('Nguyen', 'Quoc', 'Viet');

// function writeSneaker(){
//     var Nike = '';
//     for(var Sneaker of arguments)
//     {
//         Nike += `- ${Sneaker}  `   
//     }
//     console.log(Nike)
// }
// writeSneaker('Nike Adapter Bb', 'Nike Air Force 1', 'Nike Mag')


// function writeFootball()
// {
//     var Jordan = '';
//     for(var Jordan6 of arguments)
//     {
//         Jordan += `${Jordan6} -`
//     }
//     console.log(Jordan)
// }
// writeFootball('Jordan 1s Chicago', 'Jordan 6 DMP', 'Jordan 6 Gold Metallic')


// function cong(a,b)
// {
//     return a.toString() + b.toString() ; 
     
// }
// var result = cong(2,8);
// console.log(result  )


// 
// console.log('hello')
// alert('Day la Codosa');
// confirm('Are you sure');
// prompt('Okkk')
// setTimeout(function() {
//     alert('OKkk')
// },1000)
// setInterval(function() { 
//    console.log('OKAY' + Math.random(length))
// },1000)


// var emailKey = 'email';
// var myInfo = {
//     name: 'Nguyen Quoc Viet',
//     age: 18,
//     address: 'Tp Hcm, VN',
//     [emailKey]: ' vietnqv1812@gmail.com',
//     //Function --> Phuong thuc / method
//     // Others --> Thuoc tinh / property
//     phone : ' 0967181299',
//     getName: function()
//     {
//         return this.name;
//     }
// };

// delete myInfo.address;
// var myKey = 'address';

// console.log(myInfo);


// function User(firstName , lastName , avatar){
//     this.firstName = firstName;;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function()
//     {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// var author = new User('Quoc', 'Viet', 'Avatar');
// var user = new User('Van', 'Viet', 'Avatar');

// author.title = 'aloooo';
// user.comment = 'oke bde';
// User.prototype.className = 'Codosa';
// User.prototype.getclassName = function()
// {
//     return this.className;
// }

// console.log(author.className);
// console.log(user.getclassName());
// console.log(author.getName());
// console.log(user.getName());



// var sneakerName = function(firstName, lastName , size)
// {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.size = size;
//     this.getName = function()
//     {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// var Nike = new sneakerName('Jordan' , 'Nikes', 'Lebron');
// var Adidas = new sneakerName('Yeezy', 'Converse', 'New Balance');

// Nike.write = ' number 1';
// Adidas.comment = 'number 2'

// console.log(Nike);
// console.log(Adidas);
// console.log(Nike.getName());
// console.log(Adidas.getName());



// var motorName = function (Fullname , Year , Indentity)
// {
//     this.Fullname = Fullname;
//     this.Year = Year;
//     this.Indentity = Indentity;
//     this. getFullname= function ()
//     {
//         return `${Year}  ${Indentity}`;

//     }
// }



// var Honda = new motorName('AirBlade' , '2021' , 'Japan');
// var Yamaha = new motorName('Exciter', '2015', 'USA');

// Honda.comment = 'Honda is number 1'
// Yamaha.write = 'Yamaha is the best than Honda'

// motorName.prototype.classmotor = 'Winner '
// motorName.prototype.getclassmotor = function(){
//     return this.classmotor;
// }
// console.log(Honda);
// console.log(Yamaha.getclassmotor());
// console.log(Honda.getFullname());
// console.log(Yamaha.getFullname());

// var date = new Date();

// var year = date.getFullYear();
// var month = date.getMonth() +1;
// var day = date.getDate();
// console.log(`${day} ${month} ${year}`);


// var date = 9; 

// if (date === 2)
// {
//     console.log('Hom nay la thu 2');
// }
// else if (date ===3)
// {
//     console.log('Hom nay la thu 3');
// }
// else if (date ===4)
// {
//     console.log('Hom nay la thu 4');
// }
// else if (date ===5)
// {
//     console.log('Hom nay la thu 5');
// }
// else
// {
//     console.log('Khong biet')
// }


// var date =2 ;
// switch (date){
//     case 2: 
//         console.log('Hom nay la thu 2');
//         break;
//     case 2: 
//         console.log('Hom nay la thu 3');
//         break;
//     case 2: 
//         console.log('Hom nay la thu 4');
//         break;
//     default:
//         console.log('Khong biet');
// }

// var course = {
//     name : 'JS',
//     coin : 250
// }

// // if (course.coin > 0)
// // {
// //     console.log(`${course.coin} Coins`);
// // }
// // else {
// //     console.log('Mien phi');
// // }

// var result = course.coin >0 ? `${course.coin} Coins` : 'Mien phi';
// console.log(result);

// var a =1 ; 
// var b =2 ;

// var c = b > 0 ? a : b;
// console.log(c);

// for ( var i =1 ; i <= 1000 ; i++)
// {
//     console.log(i);
// }

// var myArray = [
//     'Javascript',
//     'PHP',
//     'Java',
//     'Dart',
//     'Python',
//     'AngularJS',
// ];
// var arrayLength = myArray.length;

// for (var i =0   ; i < arrayLength ; i++)
// {
//     console.log(myArray[i]);
// }


// var myArray = [
//     'Jordan 1s Chicago',
//     'Jordan 6 DMP',
//     'Jordan 6 Gold Metallic',
//     'Jordan 4 Katrina',
//     'Jordan 11 Red Velvet'
// ];
// var arrayLength = myArray.length;

// for (var i= 0 ; i < arrayLength ; i++)
// {
//     console.log(myArray[i]);
// }

// var myInfo = {
//     name : ' Viet Nguyen',
//     age : 18 ,
//     address : 'Ha Noi, VN'
// };

// for ( var key in myInfo)
// {
//     // console.log(key)
//     console.log(myInfo[key])
//     // console.log(myInfo['name'])
   
// }

// // var myString = 'Jordan';
// // var name = 'Jordan ';
// // for(var key in name)
// // {
// //     console.log(name[key]);
// // }

// var myString = 'Jordan' // 1 chuoi 
// var nameShoes = 'Jordan'
// for(var key in nameShoes)
// {
//     console.log(nameShoes[key]);
    
// }


// var languages = [ // 1 mang 
//     'English',
//     'Math',
//     'History'
// ];

// for (var value of languages)
// {
//     console.log(value);
// }


// var myInfo= {
//     name: 'Viet Nguyen',
//     age : 18
// };

// // ==>
//  // console.log(Object.keys(myInfo))
//  // object khong dung dc vong For
//  /*
// for(var value of myInfo)
// {
//     console.log(value);
// }
// */
 
// // ==> 
// for ( var value of Object.values(myInfo))
// {
//     console.log(value);
// }

// // While loop 
// var myArray = [
//     'Javascript',
//     'Ruby',
//     'Angular'
// ];
// var i=0;
//  while ( i < myArray.length)
//  {
//      console.log(myArray[i]);
//      i++;
//  }

// for (var i = 0; i< 10 ; i++)
// {
//     if(i >= 5)
//     {
//         break ;
//     }
//     console.log(i);
// }


// for (var i =0 ; i< 20 ; i++)
// {
//     if(i % 2 !=0)
//     {
//         continue ;
//     }
//     console.log(i);
// }

// var myArray = [
//     [1,2],[3,4],[5,6]
// ];
// for(var i =0 ; i < myArray.length; i++)
// {
//     for(var j=0 ; j < myArray[i].length; j++)
//     console.log(myArray[i][j]);
// }

// //CALL BACK
// // function processUserInput(callback) {
// //   var name = prompt('Please enter your name.');
// //   callback(name);
// // }
// // processUserInput(greeting);

// // function greeting(name) {
// //   alert('Hello ' + name);
// // }


// for (var i=0; i<=100; i +=5){
//     console.log(i);
// }

// // Array Method 
// var courses = [
//     {
//         id : 1,
//         name : 'Javascript',
//         coin : 0
//     },
//     {
//         id : 2,
//         name : 'Angular',
//         coin : 250
//     },
//     {
//         id : 3,
//         name : 'Ruby' , 
//         coin : 0
//     },
//     {
//         id : 4 ,
//         name : 'PHP',
//         coin :400
//     }
    
// ];

// // courses.forEach(function(course,index) // call back
// // {
// //     console.log(index , course);
// // })

// // var course = courses.filter(function(course, index)
// // {
    
// //     return course.name === 'Angular';
// // });
// // console.log(course);

// var newCourses = courses.map(function(course, index, originArray){
//     // console.log(newCourses)
//     return {
//         id : course.id,
//         name : `Khoa hoc : ${course.name} `,
//         coin : course.coin,
//         coinText: `Gia : ${course.coin}`,
//         index : index ,
//         originArray : originArray,
//     };
   
// })
// console.log(newCourses.join(' '));


// // ==> cach 1 dung vong for de lam
// // var totalcoin =0;
// // for(var course of courses)
// // {
// //     totalcoin += course.coin;
// // }
// // console.log(totalcoin);

// var totalCoin = courses.reduce(function(accumulator, currentValue) {
//     i++;
//     var total = accumulator + currentValue.coin;
//     console.table({
//         'luot chay :' : i,
//         'bien tich tru :' : accumulator,
//         'Gia khoa hoc' : currentValue.coin,
//         'Tich tru dc' : total
//     });
//     // console.log(currentValue);
//     // console.log(currentIndex);
//     return accumulator + currentValue.coin;
// },0)

// console.log(totalCoin);

// var totalCoin = courses.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue.coin;
// },0)
// console.log(totalCoin)


// var nameSneakers = [
//     {
//         id : 1,
//         name : 'Nike Air Force 1',
//         coin : 100
//     },
//     {
//         id : 2,
//         name : 'Nike adapter b.b 2.0',
//         coin : 500
//     },
//     {
//         id :3,
//         name : 'Jordan 6 DMP',
//         coin : 350
//     },
//     {
//         id : 4,
//         name : 'Jordan 1s chicago',
//         coin : 1000
//     },
//     {
//         id : 5,
//         name : 'Jordan 4 Katrina',
//         coin : 450
//     }
    
// ];
// // ==> forEach 
// // nameSneakers.forEach(function(sneaker , index)
// // {
// //     console.log(index , sneaker);
// // })

// // ==> every
// // var isChecked = nameSneakers.every(function(sneaker , index)
// // {
// //     return sneaker.coin === 1000;
// // })
// // console.log(isChecked)

// // ==> some
// // var isChecked = nameSneakers.some(function(sneaker , index)
// // {
// //     return sneaker.coin === 1000;
// // })
// // console.log(isChecked);

// // ==> find
// // sneaker = nameSneakers.find(function(sneaker, index)
// // {
// //     return sneaker.name === 'Jordan 6 DMP'
// // })
// // console.log(sneaker)

// // ==> filter
// // sneaker = nameSneakers.filter(function(sneaker , index)
// // {
// //     return sneaker.name === 'Jordan 6 DMP'
// // });
// // console.log(sneaker);

// // include method

// // var title = 'BMBMBMB DMP 6'

// // console.log(title.includes('DMP'));

// // var courses = ['JS', 'PHP', 'Dart'];
// // console.log(courses.includes('JS',-4))

// // //Math objects



// // function resolveAfter2Seconds(x) {
// //     return new Promise(resolve => {
// //       setTimeout(() => {
// //         resolve(x);
// //       }, 2000);
// //     });
// //   }
  
// //   async function f1() {
// //     var x = await resolveAfter2Seconds(100);
// //     console.log(x); // 10
// //   }
  
// //   f1();

// // async function f2() {
// //     const example = {
// //         then: function(resolve, _reject)
// //         {
// //             resolve('hello im come back')
// //         }
// //     };
// //     console.log(await example);
// // }
// // f2();

// // async function f3() {
// //     var y = await 10000;
// //     console.log(y);
// // }
// // f3();


// // function call(name ){
// //     alert('Hello' +  name);
// // }

// // function valueInput(callback)
// // {
// //     const name = prompt('Enter name :');
// //     callback(name)
// // }

// // valueInput(call);

// // const foo = ['one', 'two','there'];
// // const [red,yellow,green] = foo;
// // console.log(red);


// // let z, y;

// // [z=5, y=7] = [1];
// // console.log(z); // 1
// // console.log(y); // 7;




// // const arr = [1,2,3];
// // [arr[2], arr[1]] = [arr[1] , arr[2]]
// // console.log(arr)

// const firstName = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         reject(' Day la doi giay rat xau')
//     }, 1000)
// });

// firstName.then((resolvedData) =>{
//     console.log(`A nhat dinh se mua : ${resolvedData}`)
// },(rejectedData) =>{
//     console.log(`A se khong mua : ${rejectedData}`)
// });


// const firstDate = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve(' Hom nay la thu 7')
//     }, 1000)
// });
// firstDate.then((data) =>{
//     console.log(`A nhat dinh se di choi  : ${data}`)
// })



// const APromise = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve( " Doi giay nay 5000")
//     },5000)
// });

// const BPromise = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve("Doi giay nay 3000")
//     },3000)
// });

// const CPromise = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve("Doi giay nay 1000")
//     },1000)
// });

// Promise.any([APromise, BPromise , CPromise]).then(firstResolvedData =>{
//     console.log(` cuoi cung nen mua giay : ${firstResolvedData}`)
// })

// const promiseOne = [
//     Promise.resolve('shoes #1'), 'shoes #2',
//     new Promise((resolve, reject) =>setTimeout(resolve,100, 'shoes #3'))
// ]

// Promise.all(promiseOne).then(shoes => console.log('We can sell all these good shoes', shoes))

// const promiseTwo = [
//     Promise.resolve('shoes #1'),'shoes #2',
//     new Promise((_ , reject) => setTimeout(reject,100, 'bad shoes'))
// ]

// Promise.all(promiseTwo).then(console.log).catch(badshoes => console.error(`Threw out all shoes because of this`, badshoes))




// const allRejectedPromises = [
//   Promise.reject('🍏 #1'),
//   Promise.reject('🍏 #2'),
//   Promise.reject('🍏 #3'),
// ]

// Promise.allSettled(allRejectedPromises)
//   .then(badApples => 
//     console.log(`We can't sell any of these apples...`, badApples))
//   .catch(error => console.error('This should never occur'))


// const promisesWithoutReject = [
//   Promise.resolve('🍎 #1'),
//   '🍎 #2',
//   new Promise((resolve, reject) => setTimeout(resolve, 100, '🍎 #3'))
// ]

// Promise.allSettled(promisesWithoutReject)
//   .then(apples => console.log(`We can sell all these good apples`, apples.map(_=>_.value)))


// const promisesWithOneReject = [
//   Promise.resolve('🍎 #1'),
//   new Promise((_, reject) => setTimeout(reject, 10, '🍏 #2')),
//   '🍎 #3',
//   new Promise((_, reject) => setTimeout(reject, 100, '🍏 #4'))
// ]

// const extractApples = apples => apples.map(_ => _.value)
// Promise.allSettled(promisesWithOneReject)
//   .then(apples => {
//     const badApples = apples.filter(apple => apple.status === 'rejected').map(_ => _.reason)
//     const goodApples = apples.filter(apple => apple.status === 'fulfilled').map(_ => _.value)

//     console.log(`Let's throw out`, badApples, `and sell the rest`, goodApples)
//   })

// ///////////
// function myFunction(param){
//     if(typeof param == 'function' )
//     {
//         param('Hoc Lap Trinh');
//     }
    
// }
// function mycallback(value)
// {
//     console.log('Value:', value);
// }
// myFunction(mycallback);



// function shoes(values){
//     if(typeof values == 'function')
//     {
//         values('AF1')
//     }
// }
// function myCallback(variable)
// {
//     console.log('Variable :', variable);
// }
// shoes(myCallback);


// // Call back la ham 
// // truyen qua doi so 
// // duoc goi lai (trong ham nhan doi so)




// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });



// var p1 = Promise.resolve(2);
// var p2 = 112234;
// var p3 = new Promise((resolve, reject) => {
//     setTimeout(() =>
//     {
//         resolve('FBI');
//     },100)
// })

// Promise.all([p1, p2 , p3]).then(values =>{
//     console.log(values);
// })


// const user ={
//     id : 42 ,
//     is_verified : true
// };
// const {id ,is_verified} = user
// console.log(id);
// console.log(is_verified);

// ////////////////////////////////////////////////////////////////////////

// // Async Function 
// function test() {
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('resolve');
//         }, 1000)
//     });
// }

// async function asyncCall(){
//     console.log('calling');
//     const result = await test();
//     console.log(result);
// }
// syncCall();

// function tangQua(qua) {
//    console.log("Đã tặng " + qua);  
// }
// function oNha(tangQua) {
//   tangQua('Quà đã nhận', tangQua);
  
// }
// oNha(tangQua)

// function doHomework(subject, callback) {
//   alert(`Starting my ${subject} homework.`);
//   callback();
// }

// doHomework('math', function() {
//   alert('Finished my homework');
// });

  
//   const numbers = prompt('Please enter number', '')
//   const arr = [];
//   // console.log(numbers);
//   function getElement(numbers){
    
  
//     arr.push(numbers);
    
    
//   }
//   getElement(numbers);
//   console.log(arr);

//   const sum =0;
//   function sumValue(arr){
//   for(var i = 0; i < arr.length; i++)
//   {
//     sum += arr[i];
//   }
// }
//   console.log(sum)

////////////////////////////////////////////////////////////////
function sumInput(){
  let numbers = [];
  while(true)
  {
    let value = prompt ("A number please ?", 0);
    if (value === "" || value === null || !isFinite(value)) break ;
    numbers.push(+value)
  }
  let sum = 0;
  for (let number of numbers){
    sum += number ;
  }
  return sum ;
}
alert(sumInput())


////////////////////////////////
// var d = new Date(2020-02-20-3-120)
// alert(d);

 
  
  
  
  

  