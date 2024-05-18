let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

// that will increase the number of people
function increaseCount() {
  count += 1;
  countEl.textContent = count;
}

// to save the number then show it and assign the number to 0
function save() {
  let counterStr = count + " - ";
  saveEl.textContent += counterStr;
  count = 0;
  countEl.textContent = count;
}

// use interval to calculate the people every 10min
let interval1 = setInterval(save, 600000);

// to  stop the automatic calculate
function stop() {
  clearInterval(interval1);
}
