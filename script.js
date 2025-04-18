const days = ["Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota", "Neděle"];
const weekDiv = document.getElementById("week");

function loadPlan() {
  weekDiv.innerHTML = "";
  days.forEach(day => {
    const plan = localStorage.getItem(day) || "";
    const isDone = localStorage.getItem(day + "_done") === "true";

    const dayDiv = document.createElement("div");
    dayDiv.className = "day";
    dayDiv.innerHTML = `
      <h3>${day}</h3>
      <input type="text" placeholder="Trénink..." value="${plan}" onchange="savePlan('${day}', this.value)" />
      <br />
      <button onclick="toggleDone('${day}')">${isDone ? "✅ Hotovo" : "☑️ Označit jako hotové"}</button>
    `;
    if (isDone) {
      dayDiv.style.opacity = "0.5";
    }
    weekDiv.appendChild(dayDiv);
  });
}

function savePlan(day, value) {
  localStorage.setItem(day, value);
}

function toggleDone(day) {
  const current = localStorage.getItem(day + "_done") === "true";
  localStorage.setItem(day + "_done", !current);
  loadPlan();
}

loadPlan();
