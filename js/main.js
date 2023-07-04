const elsItemHeaderToggler = document.querySelectorAll('.item-header-toggler');

elsItemHeaderToggler.forEach(function (elItemHeaderToggler) {
  elItemHeaderToggler.addEventListener('click', function () {
    elItemHeaderToggler.closest('.questionnaire-list-item').classList.toggle('questionnaire-list-item--open');
    elItemHeaderToggler.children[0].classList.toggle('item-header-toggler-icon-open')
  });
});




document.getElementsByName('drink').forEach(function (elInputRadioButton) {
  elInputRadioButton.addEventListener('change', (event) => {
    if (event.target.checked) {
      document.getElementById('preferences').textContent = event.target.value;
    } else {
      document.getElementById('preferences').textContent = '_____'
    }
  })
})


document.getElementsByName('type').forEach(function (elInputRadioButton) {
  elInputRadioButton.addEventListener('change', (event) => {
    if (event.target.checked) {
      document.getElementById('type').textContent = event.target.value;
    } else {
      document.getElementById('type').textContent = '_____'
    }
  })
})

document.getElementsByName('like').forEach(function (elInputRadioButton) {
  elInputRadioButton.addEventListener('change', (event) => {
    if (event.target.checked) {
      document.getElementById('quantity').textContent = event.target.value;
    } else {
      document.getElementById('quantity').textContent = '_____'
    }
  })
})

document.getElementsByName('grind').forEach(function (elInputRadioButton) {
  elInputRadioButton.addEventListener('change', (event) => {
    if (event.target.checked) {
      document.getElementById('grind').textContent = event.target.value;
    } else {
      document.getElementById('grind').textContent = '_____'
    }
  })
})

document.getElementsByName('deliver').forEach(function (elInputRadioButton) {
  elInputRadioButton.addEventListener('change', (event) => {
    if (event.target.checked) {
      document.getElementById('deliveries').textContent = event.target.value;
    } else {
      document.getElementById('deliveries').textContent = '_____'
    }
  })
})