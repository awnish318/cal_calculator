// Activity MET values (Metabolic Equivalent of Task)
const MET_VALUES = {
    running: 8,
    cycling: 6,
    swimming: 7,
    walking: 3,
};

// DOM Elements
const activitySelect = document.getElementById("activity");
const durationInput = document.getElementById("duration");
const weightInput = document.getElementById("weight");
const calculateBtn = document.getElementById("calculate-btn");
const clearBtn = document.getElementById("clear-btn");
const resultDiv = document.getElementById("result");
const historyList = document.getElementById("history-list");
const toggleHistoryBtn =
    document.getElementById("toggle-history-btn");
const historySection = document.getElementById("history");

// Toggle History Visibility
function toggleHistory() {
    historySection.classList.toggle("hidden");
    toggleHistoryBtn.textContent =
        historySection.classList.contains("hidden")
            ? "Show History"
            : "Hide History";
}

// Event Listeners
calculateBtn.addEventListener("click", calculateCalories);
clearBtn.addEventListener("click", clearHistory);
toggleHistoryBtn.addEventListener("click", toggleHistory);

// Calculate Calories Burned
function calculateCalories() {
    const activity = activitySelect.value;
    const duration = parseFloat(durationInput.value);
    const weight = parseFloat(weightInput.value);
    resultDiv.style.display = '';

    if (
        isNaN(duration) ||
        isNaN(weight) ||
        duration <= 0 ||
        weight <= 0
    ) {
        resultDiv.textContent =
            "Please enter valid values for duration and weight.";
        return;
    }

    const metValue = MET_VALUES[activity];
    const caloriesBurned = (metValue * weight * duration) / 60;

    resultDiv.textContent = `Calories Burned: ${caloriesBurned.toFixed(
        2
    )} kcal`;

    // Save to history
    const historyItem = document.createElement("li");
    historyItem.textContent = `Activity: ${activity}, Duration: ${duration} mins, Weight: ${weight} kg, Calories: ${caloriesBurned.toFixed(
        2
    )} kcal`;
    historyList.appendChild(historyItem);
}

// Clear History
function clearHistory() {
    historyList.innerHTML = "";
    resultDiv.textContent = "";
}

// Event Listeners
calculateBtn.addEventListener("click", calculateCalories);
clearBtn.addEventListener("click", clearHistory);