window.addEventListener('DOMContentLoaded', function() {
  var elements = document.querySelectorAll('.datepicker-cell.day');
  var currentDate = new Date();
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var date = new Date(parseInt(element.dataset.date));
    if (date.getFullYear() < currentDate.getFullYear() ||
        (date.getFullYear() === currentDate.getFullYear() && date.getMonth() < currentDate.getMonth()) ||
        (date.getFullYear() === currentDate.getFullYear() && date.getMonth() === currentDate.getMonth() && date.getDate() < currentDate.getDate())) {
      element.style.color = '#5F5471';
      element.classList.add('past-date');
    }
  }
});
