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

/*afterbegin */
const p1=document.createElement('p')
p1.textContent="Direct Child-1"

const div=document.getElementById('tag')
div.insertAdjacentElement("afterbegin",p1)
