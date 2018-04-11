// Main function for creating layout
function createDays(nDays) {
  for (var i = 0; i < nDays; i++) {
    let day = createDay(i);

    for (var j = 0; j < 3; j++) {
      let meal = createMeal(j);
      day.appendChild(meal);
    }

    document.body.appendChild(day);
  }
}

// Function for creating days
function createDay(nDay) {
  var day = document.createElement('div');
  var p = document.createElement('p');

  day.className = 'day';
  p.innerHTML = 'Date ' + nDay;

  day.appendChild(p);

  return day;
}

// Function for creating meals
function createMeal(nMeal) {
  var meal = document.createElement('div');

  meal.className = 'meal';
  meal.appendChild(document.createTextNode("Meal " + nMeal));

  return meal;
}
