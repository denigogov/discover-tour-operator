'use strict';

// EVENT ARROW DOWN
const eventArrow = document.querySelector('.arrow-down');
const eventArrowContent = document.querySelector('.event-detail-more');

eventArrow.addEventListener('click', function () {
  eventArrowContent.classList.toggle('hidden');

  if (eventArrowContent.classList.contains('hidden')) {
    eventArrow.style.transform = `rotate(90deg)`;
  } else {
    eventArrow.style.transform = `rotate(-90deg)`;
  }
});
