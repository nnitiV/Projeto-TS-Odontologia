var leftArrow = document.getElementById("clareamento_carousel_left");
var rightArrow = document.getElementById("clareamento_carousel_right");
var carousel_clareamento_items = document.querySelectorAll(".item_carousel_clareamento");
var carousel_clareamento_items_radio_check = document.querySelectorAll(".radio_check_check_button");
var counterrrrr = 0;

rightArrow.addEventListener('click', () => {
    carousel_clareamento_items[counterrrrr].classList.remove('active');
    carousel_clareamento_items_radio_check[counterrrrr].checked = false;
    if(++counterrrrr > carousel_clareamento_items.length - 1) counterrrrr = 0;
    carousel_clareamento_items_radio_check[counterrrrr].checked = true;
    carousel_clareamento_items[counterrrrr].classList.add('active');
});

leftArrow.addEventListener('click', () => {
    carousel_clareamento_items[counterrrrr].classList.remove('active');
    carousel_clareamento_items_radio_check[counterrrrr].checked = false;
    if(--counterrrrr < 0) counterrrrr = 5;
    carousel_clareamento_items_radio_check[counterrrrr].checked = true;
    carousel_clareamento_items[counterrrrr].classList.add('active');
});


carousel_clareamento_items_radio_check.forEach((radio, index) => {
    radio.addEventListener('click', () => {
    carousel_clareamento_items[counterrrrr].classList.remove('active');
    carousel_clareamento_items_radio_check[counterrrrr].checked = false;
    counterrrrr = index;
    carousel_clareamento_items_radio_check[counterrrrr].checked = true;
    carousel_clareamento_items[counterrrrr].classList.add('active');
    });
});