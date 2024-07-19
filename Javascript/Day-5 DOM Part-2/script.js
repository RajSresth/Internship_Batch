/* beforebegin
const h1=document.createElement('h1')
h1.textContent="Learning JavaScript"

const para=document.createElement('p')
para.textContent="By Shresth Rajput"


const div=document.getElementById('tag')

div.insertAdjacentElement("beforebegin", h1)
div.insertAdjacentElement("beforebegin",para) */

/* afterend

const para1=document.createElement('p');
const para2=document.createElement('p');
para1.textContent="For Better Experience switch to 1.5x"
para2.textContent="Like,Share and Subscribe.."

const div=document.getElementById('tag')

div.insertAdjacentElement("afterend",para2)
div.insertAdjacentElement("afterend",para1)

*/

/*afterbegin 
const p1=document.createElement('p')
p1.textContent="Direct Child-1"

const div=document.getElementById('tag')
div.insertAdjacentElement("afterbegin",p1)
*/

// Traversing
// const ptag=document.querySelector('p')

// ptag.parentElement.style.backgroundColor="black";
// ptag.parentElement.style.color="white"
// ptag.parentElement.style.cssText="background-color:red;color:white;font-size:24px;"

// const main=document.querySelector('section>:last-child')
// main.parentElement.style.cssText="color:aqua;background-color:black;"

// firstElementChild
// const section=document.querySelector('section')
// console.log(section.firstElementChild)

// lastElementChild
// console.log(section.lastElementChild)

// nextElementSibling
// console.log(section.firstElementChild.nextElementSibling)


/* children*/
// const section=document.querySelector('section')
// section.children[3].style.cssText="background-color:black;color:aqua;" 


// for (let i = 0; i < section.children.length; i++) {
//     if(i%2!==0)
//         {
//             section.children[i].style.cssText="color:orange;"
//         }  
//         else{
//             section.children[i].style.cssText="color:aqua;"
//         }
// }


// childNodes
// const section=document.querySelector('section')

// remove()
// removeChild()
// const section=document.querySelector('section')
// const remove=section.children[4]
// section.removeChild(remove)


// section.children[4].remove()


// task is to remove child-3 and 6
// const section=document.querySelector('section')

// section.children[2].remove()
// section.children[3].remove()

// const child3=section.children[2]
// const child5=section.children[5]
// section.removeChild(child3)
// section.removeChild(child5)


// setAttribute("id","chombu")
// setAttribute("class","chombi")

// const section=document.querySelector('section')
// section.setAttribute("id","parent")
// section.setAttribute('class','box')

// removeAttribute("class")
// const section=document.querySelector('section')
// section.children[4].removeAttribute('class')

// getAttribute()
const section=document.querySelector('section')
let res1=section.children[2].getAttribute("id")
let res2=section.children[4].getAttribute("class")
if(res1==="bb"){
    alert("sahi khelgaya...")
}
if(res2==="carry"){
    alert("Asambhav, Asambhav ..")
}


