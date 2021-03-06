import './pug/blocks/__elements/Form_Elements.scss';
import 'ion-rangeslider';
import './pug/blocks/__elements/pagination/pagination.js';
import './pug/blocks/__elements/dropdown/dropdown.js';
import './pug/blocks/__elements/air-datepicker/datepicker.min.js';

//active two items in checkbox buttons
let checkbox = document.getElementsByClassName('checkbox__input');
checkbox[0].checked = true;
checkbox[1].checked = true;

//active first radiobutton
let radio = document.getElementsByClassName('radio-button__input');
radio[0].checked = true;

//active right like-buttons
let like = document.getElementsByClassName('like-buttons__input');
like[1].checked = true;
like[2].checked = true;

// active 4 star in left stars and all in right stars
let star = document.querySelectorAll('.rate-button__star');
star[3].classList.add('rate-button__star--full');
star[9].classList.add('rate-button__star--full');


//start range-slider
$(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 15000,
    from: 5000,
    to: 10000,
    keyboard: true,
    grid: false,
    skin: "round",
    hide_min_max: true,
    postfix: "&#8381;"
});

//pagination
$(function() {
    $('.pagination').pagination({
        items: 180,
        itemsOnPage: 12,
        cssStyle: 'light-theme',
        displayedPages: 3,
        edges: 1,
        prevText: '',
        nextText: ''
    });
});

//open expandle_checkbox
let showCheckboxExpandle = document.getElementsByClassName('checkbox-expandle__body')[1];
showCheckboxExpandle.style.display="flex";
showCheckboxExpandle.click();
// $('.checkbox-expandle__body').children[1].prop('checked', true);
// showCheckboxExpandle.children[2].click();
// showCheckboxExpandle.children[3].click();
//option margin top


//air data picker
$('.datepicker-single').datepicker({
    inline: false,
    clearButton: true,
    range: true,
    showButtonPanel: true
});
$('.datepicker--buttons').append('<span class="datepicker--button" data-action="apply">Применить</span>');

//datepicker на два инпута
$('#start').datepicker({ 
    clearButton: true,
    range: true,
    showButtonPanel: true,
    onSelect: function (fd, d, picker) { 
      $("#start").val(fd.split("-")[0]);
      $("#end").val(fd.split("-")[1]);
    }
});