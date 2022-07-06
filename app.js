const buttons = document.querySelectorAll('button');
const tooltip = document.querySelector('.tooltip .tooltiptext');
const svg = document.querySelector('.tooltip-button-svg');

// set initial visibility
tooltip.style.visibility = 'hidden';

// loop through buttons
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (window.innerWidth <= 750) {
      if (index === 0) {
        tooltip.style.visibility = 'visible';
        buttons[1].style.backgroundColor = 'hsl(214, 17%, 51%)';
        svg.style.fill = 'white'
      }
      else if (index === 1) {
        tooltip.style.visibility = 'hidden';
      }
    } else {
      if (tooltip.style.visibility === 'hidden') {
        tooltip.style.visibility = 'visible';
      } else {
        tooltip.style.visibility = 'hidden'
      }
    }
  })
  
})

// reset visibility of tooltip with window resize
window.addEventListener('resize', () => {
  tooltip.style.visibility = 'hidden';
})