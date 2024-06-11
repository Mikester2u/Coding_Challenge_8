document.getElementById(registrationForm).addEventListener("submit", function(event)) {
    event.preventDefault();
}

const name = document.getElementById("name").ariaValueMax.trim();
const email= document.getElemnetById("email").value.trim();
const eventDate = document.getElementById("eventDate").value;
const MealPreferences = document.querySelectorAll("input[name="meal"]:checked");

if (!name || !email || !eventDate || MealPreferences.length === 0) {
    alert("Please fill out all fields.");
    return;
}

const mealPrefs = [];
MealPreferences.forEach((meal) => {
    mealPrefs.push(meal.value);

});

