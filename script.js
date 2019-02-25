function footer() {
  let number = 1
  let foot = document.getElementsByTagName("footer")[0]
  foot.addEventListener("click", function () {
      console.log("clique numero " + number)
    number+= 1 // number++
    })
}
footer()

function navBar() {
  let collapse = document.getElementById("navbarHeader")
  let menu = document.getElementsByClassName("navbar-toggler-icon")[0]
  menu.addEventListener("click" , function() {
    collapse.classList.toggle("collapse")
  })
}
navBar()
function editRouge(){
  let btn = document.getElementsByClassName("btn-outline-secondary")[0]
  let text = document.querySelectorAll("div.card")[0]
  btn.addEventListener("click", function(){
    text.style.color="red"
  })
}
editRouge()


function editvert(){
  let btn = document.querySelector('body > main > div > div > div > div:nth-child(2) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary')
  let div = document.querySelector('body > main > div > div > div > div:nth-child(2) > div > div')
  btn.addEventListener("click", function () {
  div.classList.toggle("text-success")
})
}
editvert()

async function nucelar() {
  // let collapse = document.getElementById("navbarHeader")
  let nav = document.querySelector('body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div')
  let cdn  =   document.querySelector('head > link')
  // let head =   document.querySelector('head')[0]

  nav.addEventListener("dblclick" , function () {
    cdn.disabled= true
  })

}
nucelar()

function hoverEffect(){
  let btn   =    document.querySelectorAll('button.btn.btn-sm.btn-success')[0]
  let div   =    document.querySelectorAll('body > main > div > div > div > div')[0]
  let para  =    document.querySelectorAll('body > main > div > div > div > div > div > div > p')[0]
  let image =    document.querySelectorAll('body > main > div > div > div > div > div > img')[0]
    btn.addEventListener("mouseover", function(){
      para.remove()
      image.style.width="20%"    
    })
}

hoverEffect()


