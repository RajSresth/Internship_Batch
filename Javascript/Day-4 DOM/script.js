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

const divTags=document.getElementsByTagName("div")
console.log(divTags)

divTags[2].textContent="Tailwind CSS"   //ShadeCN
divTags[2].style.color="Red"

divTags[3].textContent="Bootstap"      //Radix
divTags[3].style.color="magenta"
