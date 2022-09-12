const elTitleButton = document.querySelector('.item-header');
const elTitleButton2 = document.querySelector('.item-header-2');
const elTitleButton3 = document.querySelector('.item-header-3');
const elTitleButton4 = document.querySelector('.item-header-4');
const elTitleButton5 = document.querySelector('.item-header-5');
const elRadioButton = document.querySelector('.input-check-box');

elTitleButton.addEventListener('click', function () {
  document.querySelector('.item-body').classList.toggle('item-body-open')
  document.querySelector('.item-header-title-icon').classList.toggle('item-header-title-icon-open')
});

elTitleButton2.addEventListener('click', function () {
  document.querySelector('.item-body-2').classList.toggle('item-body-open')
  document.querySelector('.item-header-title-icon-2').classList.toggle('item-header-title-icon-open')
});

elTitleButton3.addEventListener('click', function () {
  document.querySelector('.item-body-3').classList.toggle('item-body-open')
  document.querySelector('.item-header-title-icon-3').classList.toggle('item-header-title-icon-open')
});

elTitleButton4.addEventListener('click', function () {
  document.querySelector('.item-body-4').classList.toggle('item-body-open')
  document.querySelector('.item-header-title-icon-4').classList.toggle('item-header-title-icon-open')
});

elTitleButton5.addEventListener('click', function () {
  document.querySelector('.item-body-5').classList.toggle('item-body-open')
  document.querySelector('.item-header-title-icon-5').classList.toggle('item-header-title-icon-open')
});

elRadioButton.addEventListener('checked', function () {
  document.querySelector('.input-check-box-heading').classList.add('input-check-box-heading-act')
});