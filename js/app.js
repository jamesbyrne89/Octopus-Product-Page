// Navigation

$(function($){
    $( '.menu-btn' ).click(function(){
    $('.responsive-menu').toggleClass('expand')
  });
});

// Set initial item quantity

var itemQuantity = 1;
$('.quantity-num').text(itemQuantity);

// Add or remove items from cart

$('.btn--add-item').on("click", function(){
  itemQuantity++;
  $('.quantity-num').text(itemQuantity);
});

$('.quantity-num').text(itemQuantity);
$('.btn--remove-item').on("click", function(){
  if (itemQuantity>=1) {
  itemQuantity--;
  $('.quantity-num').text(itemQuantity);
}
else {
  return
}
});

// Show or hide information

$('.hide-link').on('click', function(){
  $('.item-specifications').addClass('is-hidden');
  $('.show-link').removeClass('is-hidden');
});

$('.show-link').on('click', function(){
  $('.item-specifications').removeClass('is-hidden');
  $('.show-link').addClass('is-hidden');
});

// Suggested items carousel

$('.suggested-items__carousel').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3
});
	