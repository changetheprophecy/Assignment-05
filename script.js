// Heart icon

const heartCounter = document.getElementById("heart-icon");
const heartButtons = document.querySelectorAll(".heart-btn");

heartButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let currentCount = parseInt(heartCounter.textContent);
    heartCounter.textContent = currentCount + 1;

    btn.classList.toggle("text-red-500");
  });
});

// call button

const moneyIcon = document.getElementById("money-icon");
const callButtons = document.getElementsByClassName("call-btn");
let coins = parseInt(moneyIcon.innerText);

// call history

const historyList = document.getElementById("history-list");
const clearBtn = document.getElementById("clear-history");

// call button functionality

document.body.addEventListener("click", function (e) {
  let btn = e.target.closest(".call-btn");
  if (btn) {
    let card = btn.closest(".card-body");
    let serviceName = card.querySelector("p").innerText;
    let serviceNumber = card.querySelector("h1").innerText;
    let fullServiceName = card.querySelector("h2").innerText;

    if (coins < 20) {
      alert("Not enough coins! You need at least 20 coins to make a call.");
      return;
    }

    coins = coins - 20;
    moneyIcon.innerText = coins;

    alert("Calling " + serviceName + " " + serviceNumber + "....");

    // call history functionality

    let now = new Date();
    let time = now.toLocaleTimeString();

    let historyItem = document.createElement("div");
    historyItem.className =
      "flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm";

    historyItem.innerHTML = `
    <div>
      <p class = 'font-medium'>${fullServiceName}</p>
      <p class = 'text-sm text-gray-600'>${serviceNumber}</p>
    </div>
    <span class = 'text-xs text-gray-500'>${time}</span>
  `;

    historyList.append(historyItem);
  }
});
clearBtn.addEventListener("click", function () {
  historyList.innerHTML = "";
});

// copy button

const copyCount = document.getElementById("copy-count");
const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let currentCount = parseInt(copyCount.textContent);
    copyCount.textContent = currentCount + 1;

    let card = btn.closest(".card-body");
    let serviceNumber = card.querySelector("h1").innerText;

    navigator.clipboard
      .writeText(serviceNumber)
      .then(function () {
        alert("Number copied - " + serviceNumber);
      })
      .catch(function (err) {
        alert("Failed to copy: " + err);
      });
  });
});
