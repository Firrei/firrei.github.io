window.addEventListener('DOMContentLoaded', function() {
  var elements = document.querySelectorAll('.datepicker-cell.day');
  var currentDate = new Date();

  function checkDate(date) {
    if (date < currentDate) {
      return { color: '#5F5471', clickable: false }; 
    } else {
      return { color: '#F8F8F8', clickable: true }; 
    }
  }

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var date = new Date(parseInt(element.dataset.date));
    var result = checkDate(date);
    var color = result.color;
    var clickable = result.clickable;

    if (element.classList.contains('next') && date > currentDate) {
      color = '#9891A4'; // Updated color for next month's days that are greater than the current date
    }

    if (element.classList.contains('prev') && date > currentDate) {
      color = '#9891A4'; // Updated color for previous month's days that are greater than the current date
    }

    element.style.color = color;
    element.style.pointerEvents = clickable ? 'auto' : 'none';
  }

  var controls = document.querySelectorAll('.datepicker-controls .button');
  for (var j = 0; j < controls.length; j++) {
    controls[j].addEventListener('click', function() {
      var elements = document.querySelectorAll('.datepicker-cell.day');
      for (var k = 0; k < elements.length; k++) {
        var element = elements[k];
        var date = new Date(parseInt(element.dataset.date));
        var result = checkDate(date);
        var color = result.color;
        var clickable = result.clickable;

        if (element.classList.contains('next') && date > currentDate) {
          color = '#9891A4'; // Updated color for next month's days that are greater than the current date
        }

        if (element.classList.contains('prev') && date > currentDate) {
          color = '#9891A4'; // Updated color for previous month's days that are greater than the current date
        }

        element.style.color = color;
        element.style.pointerEvents = clickable ? 'auto' : 'none';
      }
    });
  }

  var mainDatePicker = document.querySelector('.datepicker-main');
  mainDatePicker.addEventListener('click', function() {
    var elements = document.querySelectorAll('.datepicker-cell.day');
    for (var k = 0; k < elements.length; k++) {
      var element = elements[k];
      var date = new Date(parseInt(element.dataset.date));
      var result = checkDate(date);
      var color = result.color;
      var clickable = result.clickable;

      if (element.classList.contains('next') && date > currentDate) {
        color = '#9891A4'; // Updated color for next month's days that are greater than the current date
      }

      if (element.classList.contains('prev') && date > currentDate) {
        color = '#9891A4'; // Updated color for previous month's days that are greater than the current date
      }

      element.style.color = color;
      element.style.pointerEvents = clickable ? 'auto' : 'none';
    }
  });
});
