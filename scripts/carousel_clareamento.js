var leftArrow = document.getElementById("clareamento_carousel_left");
var rightArrow = document.getElementById("clareamento_carousel_right");
var carousel_clareamento_items = document.querySelectorAll(".item_carousel_clareamento");
var carousel_clareamento_items_radio_check = document.querySelectorAll(".radio_check_check_button");
var counter = 0;

rightArrow.addEventListener('click', () => {
    carousel_clareamento_items[counter].classList.remove('active');
    carousel_clareamento_items_radio_check[counter].checked = false;
    if(++counter > carousel_clareamento_items.length - 1) counter = 0;
    carousel_clareamento_items_radio_check[counter].checked = true;
    carousel_clareamento_items[counter].classList.add('active');
});

leftArrow.addEventListener('click', () => {
    carousel_clareamento_items[counter].classList.remove('active');
    carousel_clareamento_items_radio_check[counter].checked = false;
    if(--counter < 0) counter = 7;
    carousel_clareamento_items_radio_check[counter].checked = true;
    carousel_clareamento_items[counter].classList.add('active');
});


carousel_clareamento_items_radio_check.forEach((radio, index) => {
    radio.addEventListener('click', () => {
    carousel_clareamento_items[counter].classList.remove('active');
    carousel_clareamento_items_radio_check[counter].checked = false;
    counter = index;
    carousel_clareamento_items_radio_check[counter].checked = true;
    carousel_clareamento_items[counter].classList.add('active');
    });
});