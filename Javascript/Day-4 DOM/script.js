// DOM API:- ese function jiski help se ap html file me changes karte h

//1. document.getElementById('chombu')

// const tag=document.getElementById('heading')
// tag.textContent="Mele babu ne thana thaya.."
// tag.style.color="red"
// console.log(tag.textContent)


// 2. document.body
// const body=document.body
// body.style.backgroundColor="Black"
// body.style.color="white"


// 3. document.getElementsByClassName("item")

/*const divs=document.getElementsByClassName("item")
console.log(divs[1])
console.log(divs[3])

divs[1].style.color="red"
divs[3].style.color="red"*/

// 4. document.getElementsByTagName("div")

/* const divTags=document.getElementsByTagName("div")
console.log(divTags)

divTags[2].textContent="Tailwind CSS"   //ShadeCN
divTags[2].style.color="Red"

divTags[3].textContent="Bootstap"      //Radix
divTags[3].style.color="magenta" */


// 5. document.quesrySelector("div")
/* const tag=document.querySelector(".item")
 console.log(tag)*/


// 6. document.querySelectorAll()

/*
    const tags=document.querySelectorAll('div')
    tags[2].textContent="Radix"
    tags[2].style.color="red" 
*/

// Create an Element

// const chombu=document.createElement('h1')
// chombu.textContent="Hello World"
// console.log(chombu)

// Insert an Element
// const body=document.body
// body.appendChild(chombu)



{/* <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
</ul> */}

// const ul=document.createElement('ul')
// const list1=document.createElement('li')
// const list2=document.createElement('li')
// const list3=document.createElement('li')
// list1.textContent="HTML"
// list2.textContent="CSS"
// list3.textContent="JavaScript"

// ul.appendChild(list1)
// ul.appendChild(list2)
// ul.appendChild(list3)

// const body=document.body
// body.appendChild(ul)


const src=prompt("Enter image url")

function setFrame(url) {
    const frame=document.getElementById('frame')
    frame.src=url
    console.log(frame)
    
}
setFrame(src)
