var leftArrow = document.getElementById("avaliacao_carousel_left");
var rightArrow = document.getElementById("avaliacao_carousel_right");
var carousel_avaliacao_items = document.querySelectorAll(".item_carousel_avaliacao");
var carousel_avaliacao_items_radio_check = document.querySelectorAll(".radio_check_check_button_avaliacao");
var counter = 0;

rightArrow.addEventListener('click', () => {
    carousel_avaliacao_items[counter].classList.remove('active');
    carousel_avaliacao_items_radio_check[counter].checked = false;
    if(++counter > carousel_avaliacao_items.length - 1) counter = 0;
    carousel_avaliacao_items_radio_check[counter].checked = true;
    carousel_avaliacao_items[counter].classList.add('active');
});

leftArrow.addEventListener('click', () => {
    carousel_avaliacao_items[counter].classList.remove('active');
    carousel_avaliacao_items_radio_check[counter].checked = false;
    if(--counter < 0) counter = 7;
    carousel_avaliacao_items_radio_check[counter].checked = true;
    carousel_avaliacao_items[counter].classList.add('active');
});


carousel_avaliacao_items_radio_check.forEach((radio, index) => {
    radio.addEventListener('click', () => {
    carousel_avaliacao_items[counter].classList.remove('active');
    carousel_avaliacao_items_radio_check[counter].checked = false;
    counter = index;
    carousel_avaliacao_items_radio_check[counter].checked = true;
    carousel_avaliacao_items[counter].classList.add('active');
    });
});