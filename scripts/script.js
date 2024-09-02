// Carroussel
const carousel_items = document.querySelectorAll(".carousel-item");
const carousel_radio_button = document.querySelectorAll(".radio");
const prev_btn = document.querySelector('.prev-btn');
const next_btn = document.querySelector(".next-btn");
var position = 0;

setInterval(() => {
  carousel_items[position].classList.remove("active");
  carousel_radio_button[position].checked = false;
  if(++position > 10){
    position = 0;
  }
  carousel_radio_button[position].checked = true;
  carousel_items[position].classList.add("active");
}, 10000)

prev_btn.addEventListener("click", () => {
  carousel_items[position].classList.remove("active");
  carousel_radio_button[position].checked = false;
  if(--position < 0){
    position = 10;
  }
  carousel_radio_button[position].checked = true;
  carousel_items[position].classList.add("active");
})

next_btn.addEventListener("click", () => {
  carousel_items[position].classList.remove("active");
  carousel_radio_button[position].checked = false;
  if(++position > 10){
    position = 0;
  }
  carousel_radio_button[position].checked = true;
  carousel_items[position].classList.add("active");
})

function checkRadio(radioId) {
  carousel_items.forEach(item => {
    if (item.classList.contains("active")) {
      item.classList.remove("active")
    }
  });

  carousel_radio_button[position].checked = false;
  position = radioId;
  carousel_radio_button[radioId].checked = true;
  carousel_items[radioId].classList.add("active")
}