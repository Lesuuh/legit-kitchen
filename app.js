
// a database

const menu = [
 {
  id: 1,
  img: "./images/53e797d7-f3e0-4f7e-88ae-dbfaedfdeeae.jpeg",
  type: "Rice",
  price: "$40",
  category: "rice"
 },
 {
  id: 2,
  img: "./images/8e9609c2-dcb3-4f83-abc5-6a308e684263.jpeg",
  type: "Pizza",
  price: "$25",
  category: "pizza"
 },
 {
  id: 3,
  img: "./images/Cheesy BBQ Chicken Pizza.png",
  type: "Pizza",
  price: "$30",
  category: "pizza"
 },
 {
  id: 4,
  img: "./images/EASY FRIED RICE RECIPE (INDIAN STYLE) _ Spicy Indian Style Fried Rice — Spiceindiaonline.jpg",
  type: "Rice",
  price: "$10",
  category: "rice"
 },
 {
  id: 5,
  img: "./images/63a5c7d5-3afb-4c6c-a48f-12e9164e2245.jpeg",
  type: "Soup",
  price: "$15",
  category: "soup"
 },
 {
  id: 6,
  img: "./images/407c0048-2dd6-4f5c-bad1-50b6ddc97bc5.jpeg",
  type: "Rice",
  price: "$20",
  category: "rice"
 },
 {
  id: 7,
  img: "./images/No-Yeast Pizza Dough _ Recipe Tin Eats.jpg",
  type: "Pizza",
  price: "$25",
  category: "pizza"
 },
 {
  id: 8,
  img: "./images/a795cad6-6b7c-4e06-8470-16cd3ca4badb.jpeg",
  type: "Soup",
  price: "$14",
  category: "soup"
 },
 {
  id: 9,
  img: "./images/aff6e99c-cc62-44c2-aed9-10e4c62ce73c.jpeg",
  type: "Soup",
  price: "$40",
  category: "soup"
 },
 {
  id: 10,
  img: "./images/20468693-215f-4bf0-8ead-b5e25faeb562.jpeg",
  type: "Rice",
  price: "$40",
  category: "rice"
 },
 
]

const menuContainer = document.querySelector(".menu-container");
const btnContainer = document.querySelector(".buttons")

window.addEventListener("DOMContentLoaded", function(){
    displayMenuitems(menu)
    filterButtons()
});

// display menu items 
function displayMenuitems(menuItem){
 let displayMenu = menuItem.map(function(item){

  return `<div class="box">
  <div class="img"><img src="${item.img}" alt="food"></div>
  <div class="text">
      <h3 class="type">${item.type}</h3>
      <span class="price">${item.price}</span>
  </div>
 </div>`

}).join("")

menuContainer.innerHTML = displayMenu
}

// filters
function filterButtons(){
    const btns = document.querySelectorAll(".btn")

    btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
    const category = e.currentTarget.dataset.id
    console.log(category)

    const menuCategory = menu.filter(function(menuItem){
    if(menuItem.category === category){
        return menu
    }
    });
    console.log(menuCategory);

    if(category === "all"){
    displayMenuitems(menu)
    }else{
    displayMenuitems(menuCategory)
    }


    })
    })
}


// scroll to view for the reservation buttons

const reservationBtn = document.querySelector(".reservation");
const reservationSection = document.querySelector(".reservation-container");

reservationBtn.addEventListener("click", function(){
    reservationSection.classList.add("is-scrolling")
    reservationSection.scrollIntoView({behavior : "smooth"})
})

reservationSection.addEventListener("transitionend", function(toremove){
    toremove.classList.remove("is-scrolling")
})


// the nav bar
const navBtn = document.querySelector(".hamburger");
const nav = document.getElementById("nav");
const navLinks = document.querySelector(".navlinks")

navBtn.addEventListener("click", () => {

    // nav.classList.remove("nav")
    nav.classList.toggle("active")
    navLinks.style.transition = "2s"
    navLinks.style.transform = "translateY(5%)"
    // navLinks.classList.toggle("transform")

})