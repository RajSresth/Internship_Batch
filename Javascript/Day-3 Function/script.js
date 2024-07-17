/*function something(name)
{
    console.log(name+" Bhai vo tujhe hi dekh rahi h..!")

    return `Bulati h magar jane ka nahi`
}

const result=something("Harikesh")   //call
console.log(result)


const res2=something("Ronak")
const res3=something("Alok")
console.log(res2)
console.log(res3)


function printMeme(name="Alok")
{
    console.log(name+" Gadari Karbe..")
}
printMeme("Gaurav")*/

/* javascript Comment format */

/*function findSum(a,b)
{
    let sum=a+b;
    console.log(`Sum of ${a} and ${b} is: ${sum}`)    
    return `Task is Completed`
}

const res1=findSum(5,5)
alert(res1)
const res2=findSum(10,20)
alert(res2)*/


/*const salmon=function(name){
    console.log(`Hum ${name} tmhare andr itne ched krenge ki confuse ho jaoge`)

    return `Oh oh jane jana`
}

const res=salmon("Abhishek")
console.log(res)*/

/* const findRem=function (a,b){
    let rem=a%b;
    console.log("Reminder is: "+rem)
}

findRem(100,10)

const findQuot=function (a,b) {
    let quot=Math.floor(a/b)
    console.log("Quotient is: "+quot)
}
findQuot(100,10)*/

/* Immediate Invoke Function Expression

let res=0;
(function ()
{
    res=confirm("Do you want to share your location?")
})()
console.log(res)*/


// Arrow Function

// const something=(a,b)=>{
//                             console.log("Sum is: "+a+b)
//                         }

// something(5,5)


/* wajsp to create a function and find out square root?

const findCbroot=a=>{
    let root=Math.cbrt(a)
    console.log("Cube root is: "+root)
}
findCbroot(1000) */


// function generic(task,a,b){
//     task(a,b)
// }

// function sum(c,d){
//     console.log("Sum is: "+(c+d))
// }

// generic(sum,10,10)

// HOF
const generic=(task1,task2,x,y)=>{
    task1(x,y)
    task2(x,y)
}

// CB-1
const power=(a,b)=>{
    console.log("Power is: "+(a**b))
}

// CB-2
const sum=(a,b)=>{
    console.log("Sum is: "+(a+b))
}

generic(power,sum,10,2)